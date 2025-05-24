import { createContext, useContext, useState, ReactNode } from "react";

interface FloorContextType {
  floor: number;
  setFloor: (floor: number) => void;
}

const FloorContext = createContext<FloorContextType | undefined>(undefined);

export const useFloor = () => {
  const context = useContext(FloorContext);
  if (!context) {
    throw new Error("useFloor must be used within a FloorProvider");
  }
  return context;
};

export const FloorProvider = ({ children }: { children: ReactNode }) => {
  const [floor, setFloor] = useState(1);
  return (
    <FloorContext.Provider value={{ floor, setFloor }}>
      {children}
    </FloorContext.Provider>
  );
};
