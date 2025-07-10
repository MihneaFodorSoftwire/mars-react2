import './App.css'
import * as React from "react";
import {useState} from "react";

interface ContentSectionProps {
    title: string;
    paragraph1: string;
    paragraph2: string;
    imageSrc: string;
    imageAlt: string;
}

const ClickCounter: React.FC = ()=> {
   const [count, setCount] = useState(0);

   const handleClick = () => {
       setCount(count + 1);
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
      </>
  )
}

export default App
