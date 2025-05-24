import { FiMapPin } from "react-icons/fi";
import Tooltip from "components/ui/Tooltip";
import { NavigationContext } from "pages/Map";
import { NavigationContextType } from "utils/types";
import { useContext } from "react";
import { resetEdges } from "utils/navigationHelper";

function EditPositionButton() {
  const { navigation, isEditMode, setIsEditMode, setNavigation } = useContext(
    NavigationContext
  ) as NavigationContextType;
  function handleEdit() {
    setIsEditMode(!isEditMode);
    resetEdges(navigation.floor);
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      end: "",
    }));
  }
  return (
    <Tooltip content="Поменять местоположение" className="bg-green-500">
      <button
        data-tooltip-target="tooltip-default"
        className="ml-1 h-12 w-12 bg-green-500 center rounded text-white"
        onClick={() => handleEdit()}
        aria-label="change position"
      >
        <FiMapPin />
      </button>
    </Tooltip>
  );
}

export default EditPositionButton;
