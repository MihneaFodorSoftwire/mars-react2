import './App.css'
import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar.tsx";
import {AnomalyCounter} from "./components/anomalyCounter.tsx";
import {ClickCounter} from "./components/clickCounter.tsx";
import {ContentSection} from "./components/contentSection.tsx";

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
