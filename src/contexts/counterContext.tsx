import { useState, createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type CounterContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

export const CounterContext = createContext({} as CounterContextType);

export const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextType => useContext(CounterContext);
