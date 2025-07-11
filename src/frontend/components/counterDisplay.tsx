import * as React from "react";
import {useContext} from "react";
import {CounterContext} from "./counterContextType.tsx";

//component 4
export const CounterDisplay: React.FC = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('CounterDisplay must be used within a CounterContext.Provider');
    }
    const { count } = context;

    return (
        <div className="counter-display">
            <p className="counter-text">Anomalies Reported: {count}</p>
        </div>
    );
};