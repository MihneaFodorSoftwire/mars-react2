import './App.css'
import * as React from "react";
import {createContext, useContext, useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

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
            <h2 className="counter-title">Aliens you see</h2>
            <p className="counter-text">You have spotted {count} aliens.</p>
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

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">
                        Nasa and aliens
                    </Link>
                </li>
                <li>
                    <Link to="/anomaly" className="text-white hover:text-gray-300">
                        Anomalies IRL
                    </Link>
                </li>
            </ul>
        </nav>
    );
};


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                    <>
                        <ContentSection
                            title="NASA conspiracy"
                            paragraph1="Speculation about NASA concealing evidence of an alien spaceship has long fueled conspiracy theories, often centered around classified missions and restricted data. Proponents claim NASA possesses advanced imaging from deep-space telescopes or lunar missions that reveal extraterrestrial crafts, yet deliberately withholds this information to prevent global panic or maintain geopolitical control. They point to anomalies in Apollo mission photos, such as unusual shadows or objects on the moon's surface, as evidence of doctored images or suppressed discoveries. Alleged whistleblowers, including former NASA employees, have claimed the agency maintains secret archives, accessible only to elite insiders, where footage of unidentified spacecraft is stored under strict confidentiality protocols."
                            paragraph2="Skeptics argue that NASA's transparency, through public data releases and open collaboration with global scientists, contradicts these claims. The agency’s rigorous peer-review process and the sheer volume of publicly available data—such as high-resolution images from Mars rovers or the Hubble Space Telescope—make large-scale cover-ups unlikely. Still, conspiracy theorists cite heavily redacted documents obtained via Freedom of Information Act requests as proof of hidden truths. They speculate that NASA uses advanced technology to obscure extraterrestrial evidence, such as airbrushing images or manipulating telemetry data, to maintain a narrative that humanity is alone in the universe, possibly under pressure from higher governmental authorities."
                            imageSrc="https://science.nasa.gov/wp-content/uploads/2024/03/sol058-to-060-lion-king-pia05755.jpg"
                            imageAlt="Alien ship"
                        />
                        <ClickCounter />
                    </>
                    }
                />
                <Route path="/anomaly" element={
                    <>
                        <ContentSection
                            title="Anomalies sightings"
                            paragraph1="Anomaly sightings, often associated with unidentified aerial phenomena (UAP) or extraterrestrial activity, have captivated public imagination for decades, fueling both curiosity and skepticism. Reports of strange lights, unexplainable objects, or erratic movements in the sky have been documented globally, with some claiming these sightings indicate advanced technology beyond human capabilities. For instance, declassified U.S. government reports, like the 2021 Pentagon UAP Task Force report, documented 144 cases, with many incidents involving objects moving at hypersonic speeds without visible propulsion systems. Eyewitness accounts from pilots, military personnel, and civilians often describe these anomalies as defying known aerodynamics, prompting speculation about their origins—ranging from secret military projects to extraterrestrial visitors. However, limited physical evidence and the subjective nature of sightings leave many questions unanswered, driving ongoing investigations by organizations like NASA and private researchers."
                            paragraph2="Skeptics argue that most anomaly sightings can be explained by natural phenomena, optical illusions, or advanced human technology misidentified by observers. Atmospheric conditions, such as temperature inversions, can create mirages that resemble distant objects, while drones and experimental aircraft may account for some high-speed sightings. For example, the 1997 Phoenix Lights incident, widely reported as a massive V-shaped craft, was later attributed by some to military flares, though believers maintain it was an extraterrestrial event. The rise of smartphones and social media has increased the volume of reported sightings, yet the quality of evidence remains inconsistent, often relying on blurry videos or anecdotal accounts. Despite this, the persistence of unexplained cases continues to spark debate, with advocates pushing for greater transparency and scientific study to determine whether these anomalies represent groundbreaking discoveries or merely misinterpretations of the mundane."
                            imageSrc="https://images-assets.nasa.gov/image/PIA23128/PIA23128~orig.jpg"
                            imageAlt="Alien cat"
                        />
                        <AnomalyCounter />
                    </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App
