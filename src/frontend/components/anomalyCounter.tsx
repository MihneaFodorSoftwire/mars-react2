import {useState} from "react";
import styled from "styled-components";
import {CounterContext} from "./counterContextType.tsx";
import {ButtonContainer} from "./buttonContainer.tsx";
import {DisplayContainer} from "./displayCounter.tsx";

const CounterContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-top: 1px solid #ccc;
`;

const CounterTitle = styled.h2`
  font-size: 1.8em;
  color: #535;
  margin-bottom: 15px;
`;

// component 1
export const AnomalyCounter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            <CounterContainer>
                <CounterTitle>Anomaly Counter</CounterTitle>
                <ButtonContainer />
                <DisplayContainer />
            </CounterContainer>
        </CounterContext.Provider>
    );
};
