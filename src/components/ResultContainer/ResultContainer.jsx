import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });

    return <div className="result-container">{suggestNameJsx}</div>;
};

export default ResultsContainer;