import * as React from "react";
import {useContext} from "react";
import {CounterContext} from "./counterContextType.tsx";
import {CounterDisplay} from "./counterDisplay.tsx";

// component 3
export const DisplayContainer: React.FC = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('CounterDisplay must be used within a CounterContext.Provider');
    }
    const { count } = context;

    return (
        <div className="display-container">
            <CounterDisplay />
            <p className="counter-message">
                {count === 0 ? 'No anomalies reported yet!' : `You've reported ${count} anomal${count === 1 ? 'y' : 'ies'}!`}
            </p>
        </div>
    );
};
