import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "pages/Map";
import { NavigationContextType } from "utils/types";
import { resetEdges } from "utils/navigationHelper";
import { defaultPositionsByFloor } from "utils/floorDefaults";

function FloorSwitcher() {
  const navigate = useNavigate();

  const { navigation, setNavigation } = useContext(
    NavigationContext
  ) as NavigationContextType;

  const handleFloorChange = (newFloor: number) => {
    const defaultStart = defaultPositionsByFloor[newFloor];

    resetEdges(newFloor);

    setNavigation({
      floor: newFloor,
      start: defaultStart,
      end: "",
    });

    navigate(`/${newFloor}?position=${defaultStart}`);
  };

  const floors = [0, 1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
      {floors.map((floor) => (
        <button
          key={floor}
          onClick={() => handleFloorChange(floor)}
          className={`w-10 h-10 rounded-full font-semibold transition-all duration-200
            ${
            navigation.floor === floor
              ? "bg-blue-600 text-white scale-105 shadow-md"
              : "bg-white text-gray-700 hover:bg-blue-100"
          }`}
        >
          {floor}
        </button>
      ))}
    </div>
  );
}

export default FloorSwitcher;