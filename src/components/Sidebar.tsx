import logo from "assets/img/stanica-logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "utils/types";
import { MapDataContext, NavigationContext } from "pages/Map";
import { navigateToObject, resetEdges } from "utils/navigationHelper";
import useGraphData from "utils/useGraphData";
import { useNavigate } from "react-router-dom";
import {defaultPositionsByFloor} from "utils/floorDefaults.ts";

interface ParsedObjects {
  [key: string]: {
    len: number;
    results: ObjectItem[];
  };
}

function Sidebar() {
  const navigate = useNavigate();
  const { navigation, setNavigation, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [parsedObjects, setParsedObjects] = useState<ParsedObjects>({});

  const graphData = useGraphData(navigation.floor);

  useEffect(() => {
    const groupedObjects = () => {
      const data: ParsedObjects = {};
      objects.forEach((object) => {
        const firstLetter = object.name.charAt(0).toUpperCase();
        if (!data[firstLetter]) {
          data[firstLetter] = {
            len: 0,
            results: [],
          };
        }
        data[firstLetter].results.push(object);
        data[firstLetter].len += 1;
      });
      setParsedObjects(data);
    };
    groupedObjects();
  }, [objects]);

  function handleObjectNavigation(selectedObjectName: string) {
    const object = objects.find((obj) => obj.name === selectedObjectName);
    setIsEditMode(false);
    if (!object) return;

    const floorMatch = object.categoryId?.match(/\d+/);
    const targetFloor = floorMatch ? parseInt(floorMatch[0]) : 0;

    const newStart = defaultPositionsByFloor[targetFloor];

    if (navigation.floor === targetFloor) {
      if (graphData.vertices.length === 0) {
        setTimeout(() => handleObjectNavigation(selectedObjectName), 100);
        return;
      }
      navigateToObject(object.name, navigation, setNavigation, targetFloor);
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
      JSON.stringify({ objectName: selectedObjectName, floor: targetFloor })
    );

    navigate(`/${targetFloor}?position=${newStart}`);

  }


  return (
    <aside className="flex flex-col rounded-none w-[35rem] h-screen p-3 bg-white shadow-xl shadow-gray-200 -translate-x-full transform transition-transform duration-150 ease-in lg:translate-x-0 lg:shadow-md ">
      <header className="flex flex-col mb-4 pr-1 border-b py-2 w-full">
        <div className="flex items-center flex-none mr-10">
            <img
              src={logo}
              alt="BcAlmaty"
            />
        </div>
      </header>
      <div className="overflow-auto h-full">
        {Object.keys(parsedObjects)
          .sort()
          .map((letter, index) => (
            <div key={index} className="mb-4">
              <header className="p-2">
                <h2 className="text-2xl font-bold">
                  {letter}
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    - {parsedObjects[letter].len} {" "}
                    {parsedObjects[letter].len === 1 ? "Арендатор" : "Арендаторов"}
                  </span>
                </h2>
              </header>
              <div className="flex flex-col ">
                {parsedObjects[letter].results.map((item) => (
                  <div
                    key={item.id?.toString()}
                    data-product={item.name}
                    className="flex bg-[#f4faff] m-1 px-4 py-2 shadow-sm rounded-md cursor-pointer h-auto hover:bg-[#e4f2ff]"
                    onClick={() => handleObjectNavigation(item.name)}
                  >
                    <div className="m-1">
                      <p className="text-xs 2xl:text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-xs 2xl:text-sm  text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                    <div className="center ml-auto h-auto center text-xl text-blue-300">
                      <FiChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </aside>
  );
}
export default Sidebar;