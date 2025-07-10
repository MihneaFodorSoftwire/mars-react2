import './App.css'
import * as React from "react";
import {createContext, useContext, useEffect, useState} from "react";

interface ContentSectionProps {
    title: string;
    paragraph1: string;
    paragraph2: string;
    imageSrc: string;
    imageAlt: string;
}

interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

// component 1
const AnomalyCounter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            <div className="counter-container">
                <h2 className="counter-title">Anomaly Counter</h2>
                <ButtonContainer />
                <DisplayContainer />
            </div>
        </CounterContext.Provider>
    );
};

// component 2
const ButtonContainer: React.FC = () => {
    return (
        <div className="button-container">
            <CounterButton />
        </div>
    );
};

// button
const CounterButton: React.FC = () => {
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

// component 3
const DisplayContainer: React.FC = () => {
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

//component 4
const CounterDisplay: React.FC = () => {
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

const ClickCounter: React.FC = ()=> {
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
            <h2 className="counter-title">Button Click Counter</h2>
            <p className="counter-text">You have clicked the button {count} times.</p>
            <button className="counter-button" onClick={handleClick}>
                Click Me!
            </button>
        </div>
    );
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, paragraph1, paragraph2, imageSrc, imageAlt }) => {
    return (
        <div className="nasa-container">
            <h1 className="nasa-title">{title}</h1>
            <p className="nasa-text">{paragraph1}</p>
            <p className="nasa-text">{paragraph2}</p>
            <img src={imageSrc} alt={imageAlt} className="nasa-image" />
        </div>
    );
};

function App() {
  return (
      <>
          <ContentSection
          title={"NASA conspiracy"}
          paragraph1={"Speculation about NASA concealing evidence of an alien spaceship has long fueled conspiracy theories, often centered around classified missions and restricted data. Proponents claim NASA possesses advanced imaging from deep-space telescopes or lunar missions that reveal extraterrestrial crafts, yet deliberately withholds this information to prevent global panic or maintain geopolitical control. They point to anomalies in Apollo mission photos, such as unusual shadows or objects on the moon's surface, as evidence of doctored images or suppressed discoveries. Alleged whistleblowers, including former NASA employees, have claimed the agency maintains secret archives, accessible only to elite insiders, where footage of unidentified spacecraft is stored under strict confidentiality protocols.\n"}
          paragraph2={"Skeptics argue that NASA's transparency, through public data releases and open collaboration with global scientists, contradicts these claims. The agency’s rigorous peer-review process and the sheer volume of publicly available data—such as high-resolution images from Mars rovers or the Hubble Space Telescope—make large-scale cover-ups unlikely. Still, conspiracy theorists cite heavily redacted documents obtained via Freedom of Information Act requests as proof of hidden truths. They speculate that NASA uses advanced technology to obscure extraterrestrial evidence, such as airbrushing images or manipulating telemetry data, to maintain a narrative that humanity is alone in the universe, possibly under pressure from higher governmental authorities.\n"}
          imageSrc={"https://science.nasa.gov/wp-content/uploads/2024/03/sol058-to-060-lion-king-pia05755.jpg"}
          imageAlt={"Alien ship"}/>
          <ClickCounter />
          <AnomalyCounter />
      </>
  )
}

export default App
