import { NavigationContext } from "pages/Map";
import { NavigationContextType } from "utils/types";
import { useContext } from "react";
import { isDesktop } from "react-device-detect";
import EditPositionButton from "components/EditPositionButton";
import DesktopRouteDetails from "components/DesktopRouteDetails";
import SearchBar from "components/SearchBar";
import FloorSwitcher from "components/FloorSwitcher";

function Toolbar() {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  return (
    <div className="flex space-x-1 mb-4 h-12 relative">
      <SearchBar />
      <EditPositionButton />
      <FloorSwitcher />
      {navigation.end && isDesktop && <DesktopRouteDetails />}
    </div>
  );
}

export default Toolbar;
