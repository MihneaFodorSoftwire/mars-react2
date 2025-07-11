import * as React from "react";

interface ContentSectionProps {
    title: string;
    paragraph1: string;
    paragraph2: string;
    imageSrc: string;
    imageAlt: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, paragraph1, paragraph2, imageSrc, imageAlt }) => {
    return (
        <div className="nasa-container">
            <h1 className="nasa-title">{title}</h1>
            <p className="nasa-text">{paragraph1}</p>
            <p className="nasa-text">{paragraph2}</p>
            <img src={imageSrc} alt={imageAlt} className="nasa-image" />
        </div>
    );
};