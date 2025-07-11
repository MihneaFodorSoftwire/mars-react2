import * as React from "react";
import {CounterButton} from "./containerButton.tsx";

// component 2
export const ButtonContainer: React.FC = () => {
    return (
        <div className="button-container">
            <CounterButton />
        </div>
    );
};
