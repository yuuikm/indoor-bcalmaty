export interface ObjectItem {
  id: string;
  name: string;
  desc: string;
  categoryId: string;
  categoryName?: string;
}
export interface Category {
  id: string;
  name: string;
}

export interface Beacon {
  _id: string;
  beacon_id: string;
  rssi: number;
}

export interface Navigation {
  start: string;
  end?: string;
  floor: number;
}

export interface NavigationContextType {
  navigation: Navigation;
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>>;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MapDataContextType {
  objects: ObjectItem[];
  categories: Category[];
  beacons?: Beacon[];
  refetchData: () => void;
}

export interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BleBeacon {
  name: string;
  id: string;
  rssi: number;
  txPower: number;
  uuids: string[];
}

export interface FloorObject {
  id: string;
  d: string;
}

export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}

export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
