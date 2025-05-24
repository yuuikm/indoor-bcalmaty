import Tooltip from "components/ui/Tooltip";
import {
  navigateToObject,
  resetEdges,
} from "utils/navigationHelper";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FiCircle, FiNavigation } from "react-icons/fi";
import { MapDataContext, NavigationContext } from "pages/Map";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "utils/types";
import { useNavigate } from "react-router-dom";
import { defaultPositionsByFloor } from "utils/floorDefaults";

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [suggestions, setSuggestions] = useState<ObjectItem[]>(objects);
  const [isAutocomplete, setIsAutocomplete] = useState<boolean>(false);
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { navigation, setNavigation, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;

  useEffect(() => {
    setSuggestions(objects);
  }, [objects]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      setIsAutocomplete(true);
      const filteredSuggestions = objects.filter((obj) =>
        obj.name.toLowerCase().includes(value.trim().toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setIsAutocomplete(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (isAutocomplete) {
      if (event.key === "ArrowDown") {
        if (selectedIndex < suggestions.length - 1) {
          setSelectedIndex((prevIndex) => prevIndex + 1);
          setInputValue(suggestions[selectedIndex + 1].name);
        }
        event.preventDefault();
      } else if (event.key === "ArrowUp") {
        if (selectedIndex > 0) {
          setSelectedIndex((prevIndex) => prevIndex - 1);
          setInputValue(suggestions[selectedIndex - 1].name);
        }
        event.preventDefault();
      } else if (event.key === "Enter" && selectedIndex >= 0) {
        handleSuggestionClick(suggestions[selectedIndex]);
        event.preventDefault();
        handleSearch(suggestions[selectedIndex].name);
      }
    }
  }

  useEffect(() => {
    if (suggestionsRef.current && selectedIndex >= 0) {
      const suggestionElements = suggestionsRef.current.children;
      if (suggestionElements[selectedIndex]) {
        suggestionElements[selectedIndex].scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [selectedIndex]);

  function handleSuggestionClick(selectedObject: ObjectItem) {
    setInputValue(selectedObject.name);
    setIsAutocomplete(false);
  }

  function handleInputFocus(event: React.FocusEvent<HTMLInputElement>) {
    setIsEditMode(false);
    if (inputValue.length > 1) {
      setIsAutocomplete(true);
    }
    event.currentTarget.select();
  }

  function handleInputBlur() {
    setIsAutocomplete(false);
    setSelectedIndex(-1);
  }

  function handleSearch(input: string) {
    const matchingObject = objects.find(
      (obj) => obj.name.toLowerCase() === input.trim().toLowerCase()
    );

    if (!matchingObject) {
      if (input === "Test") {
        return;
      } else {
        setIsInputInvalid(true);
        return;
      }
    }

    const targetFloor = parseInt(matchingObject.categoryId.replace("f", ""));
    const newStart = defaultPositionsByFloor[targetFloor];

    if (navigation.floor === targetFloor) {
      resetEdges(targetFloor);
      navigateToObject(matchingObject.name, navigation, setNavigation, targetFloor);
      return;
    }

    resetEdges(navigation.floor);

    setNavigation({
      floor: targetFloor,
      start: newStart,
      end: "",
    });

    sessionStorage.setItem(
      "pendingNavigation",
      JSON.stringify({ objectName: matchingObject.name, floor: targetFloor })
    );

    navigate(`/${targetFloor}?position=${newStart}`);
  }

  return (
    <div className="md:w-96 w-full flex flex-row">
      <div className="flex flex-inline rounded w-full">
        <div className="h-12 w-12 center flex-none rounded-l bg-white text-blue-500 text-[8px] ">
          <div className="w-full h-8 center border-gray-300 border-r">
            <FiCircle />
          </div>
        </div>
        <div className="flex w-full relative">
          <input
            className={`h-12 p-4 w-full flex-none text-gray-900 text-sm md:text-md bg-white ${
              isInputInvalid && "input-error"
            } `}
            placeholder="Поиск"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            ref={inputRef}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            onAnimationEnd={() => setIsInputInvalid(false)}
          />

          {isAutocomplete && (
            <ul
              ref={suggestionsRef}
              className="absolute w-full z-10 mt-[3.25rem] bg-white rounded shadow-md max-h-60 h-min overflow-auto"
              key={"suggestions"}
            >
              {suggestions.length > 0 ? (
                suggestions.map((obj, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer p-2 border-t text-gray-600 hover:bg-gray-200 active:bg-gray-300 text-sm md:text-md ${
                      selectedIndex === index
                        ? "border-l-4 border-blue-500 bg-gray-200"
                        : ""
                    }`}
                    onMouseDown={() => handleSuggestionClick(obj)}
                  >
                    {obj.name}
                  </li>
                ))
              ) : (
                <li
                  className="p-2 text-gray-500 text-sm md:text-md"
                  key={"no-result"}
                >
                  Ничего не найдено
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="">
          <Tooltip content="Поиск" className="bg-blue-500">
            <button
              className="h-12 w-12 flex flex-none center justify-center rounded-r bg-blue-500 text-white"
              onClick={() => handleSearch(inputValue)}
              aria-label="search"
            >
              <FiNavigation />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;