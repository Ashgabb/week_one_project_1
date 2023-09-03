import React from 'react';
import './PreviewCard.css'; 

const PreviewCard = ({ title, description, imageSrc, linkUrl}) => {
  return (
    <div className="preview-card">
      <img className="card-image" src={imageSrc} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a className="card-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

export default PreviewCard;
