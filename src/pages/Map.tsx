import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import Toolbar from "components/Toolbar";
import Sidebar from "components/Sidebar";
import IndoorMapWrapper from "components/IndoorMapWrapper";
import MobileRouteDetails from "components/MobileRouteDetails";
import useMapData from "hooks/useMapData";
import {
  MapDataContextType,
  Navigation,
  NavigationContextType,
} from "utils/types";
import { defaultPositionsByFloor } from "utils/floorDefaults";
import useGraphData from "utils/useGraphData";

export const NavigationContext = createContext<NavigationContextType | null>(null);
export const MapDataContext = createContext<MapDataContextType | null>(null);

function Map() {
  const navigate = useNavigate();
  const { floorNumber } = useParams<{ floorNumber: string }>();
  const [searchParams] = useSearchParams();

  const floor = Number(floorNumber) || 1;

  const [navigation, setNavigation] = useState<Navigation>({
    start: "",
    end: "",
    floor,
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const navigationValue: NavigationContextType = {
    navigation,
    setNavigation,
    isEditMode,
    setIsEditMode,
  };

  const mapData = useMapData();
  const graphData = useGraphData(floor);

  useEffect(() => {
    const positionParam = searchParams.get("position");
    const defaultStart = defaultPositionsByFloor[floor];
    const start = positionParam || defaultStart;

    setNavigation({ start, end: "", floor });

    if (floorNumber !== String(floor) || positionParam !== start) {
      navigate(`/${floor}?position=${start}`, { replace: true });
    }

    const pending = sessionStorage.getItem("pendingNavigation");

    if (pending) {
      const { objectName } = JSON.parse(pending);

      const tryNavigate = () => {
        if (graphData.vertices.length > 0) {
          sessionStorage.removeItem("pendingNavigation");

          import("utils/navigationHelper").then(({ navigateToObject }) => {
            navigateToObject(objectName, { start, end: "", floor }, setNavigation, floor);
          });
        } else {
          setTimeout(tryNavigate, 100);
        }
      };

      tryNavigate();
    }
  }, [floor, graphData]);

  return (
    <MapDataContext.Provider value={mapData}>
      <NavigationContext.Provider value={navigationValue}>
        <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
          {isDesktop && <Sidebar />}
          <main
            className={`flex w-full ${isDesktop && "-ml-96"} justify-center flex-grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
          >
            <Toolbar />
            <div className="center w-full h-full">
              <IndoorMapWrapper />
            </div>
          </main>
          {navigation.end && isMobile && <MobileRouteDetails />}
        </div>
      </NavigationContext.Provider>
    </MapDataContext.Provider>
  );
}

export default Map;
