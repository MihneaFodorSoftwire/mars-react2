import {useContext, useEffect} from "react";
import {CounterContext} from "./counterContextType.tsx";

// button
export const CounterButton: React.FC = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('CounterButton must be used within a CounterContext.Provider');
    }
    const { setCount } = context;

    useEffect(() => {
        const storedCount = localStorage.getItem('anomalyCount');
        if (storedCount) {
            setCount(parseInt(storedCount, 10));
        }
        console.log('Initialized count from localStorage:', storedCount);
    }, []);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
        localStorage.setItem('anomalyCount', (context.count + 1).toString());
        console.log('Saved count to localStorage:', context.count);
    }

    return (
        <button className="counter-button" onClick={handleClick}>
            Report Anomaly
        </button>
    );
};