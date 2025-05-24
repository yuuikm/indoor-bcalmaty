import React, { useContext, useState } from "react";
import { isMobile } from "react-device-detect";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { MapDataContext, NavigationContext } from "pages/Map";
import "styles/map.css";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "utils/types";
import MapBackground from "components/IndoorMap/MapBackground";
import Paths from "components/IndoorMap/Paths";
import Positions from "components/IndoorMap/Positions";
import Objects from "components/IndoorMap/Objects";
import Controls from "components/MapControls";
import ObjectDetailsModal from "components/Modals/ObjectDetailsModal";
import { navigateToObject } from "utils/navigationHelper";
import { toast } from "react-toastify";

function IndoorMapWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  const positionRadius = isMobile ? 10 : 8;

  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

  const floor = navigation.floor;

  async function handleObjectClick(e: React.MouseEvent<SVGPathElement>) {
    if (!isEditMode) {
      const targetId = (e.target as HTMLElement).id;
      const selectedObject = objects.find((obj) => obj.name === targetId);
      if (selectedObject?.id) {
        setObject(selectedObject);
        setModalOpen(true);
      } else {
        toast.error("Object not found");
      }
    }
  }

  const handlePositionClick = (e: React.MouseEvent<SVGCircleElement>) => {
    if (isEditMode) {
      const vertexId = (e.target as HTMLElement).id;
      setNavigation({ ...navigation, start: vertexId });
      setIsEditMode(false);
    }
  };

  function handleNavigationClick() {
    setModalOpen(false);
    navigateToObject(object.name, navigation, setNavigation, floor);
  }

  return (
    <div className="relative w-full h-full bg-white center">
      <ObjectDetailsModal
        open={modalOpen}
        object={object}
        onClose={() => setModalOpen((cur) => !cur)}
        objectNavigation={handleNavigationClick}
      />

      <TransformWrapper
        centerOnInit
        minScale={isMobile ? 0.4 : 1}
        doubleClick={{ mode: "reset" }}
        initialScale={isMobile ? 0.4 : 1}
        smooth={true}
        wheel={{ smoothStep: 0.01 }}
      >
        <TransformComponent wrapperClass="bg-white">
          <MapBackground floor={floor}>
            <Objects
              floor={floor}
              handleObjectClick={handleObjectClick}
              className={
                isEditMode ? "" : "hover:cursor-pointer hover:opacity-50"
              }
            />
            <Paths floor={floor} />
            <Positions
              floor={floor}
              positionRadius={positionRadius}
              handlePositionClick={handlePositionClick}
              className={
                isEditMode
                  ? "opacity-100 cursor-pointer hover:fill-[#488af4]"
                  : "opacity-0"
              }
              navigation={navigation}
            />
          </MapBackground>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}

export default IndoorMapWrapper;
