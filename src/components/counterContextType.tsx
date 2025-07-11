import * as React from "react";
import {createContext} from "react";

interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);
