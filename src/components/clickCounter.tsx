import * as React from "react";
import {useEffect, useState} from "react";

export const ClickCounter: React.FC = ()=> {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('clickCount');
        if (storedCount) {
            setCount(parseInt(storedCount, 10));
        }
        console.log('Initialized count from localStorage:', storedCount);
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        localStorage.setItem('clickCount', (count + 1).toString());
        console.log('Saved count to localStorage:', count);
    }

    return (
        <div className="counter-container">
            <h2 className="counter-title">Aliens you see</h2>
            <p className="counter-text">You have spotted {count} aliens.</p>
            <button className="counter-button" onClick={handleClick}>
                Click Me!
            </button>
        </div>
    );
}