import React from 'react';

interface CardTecnologiaProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

const CardTecnologia: React.FC<CardTecnologiaProps> = ({ title, image, description, rating }) => {
  return (
    <div className="card">
        <h3 style={{fontSize:20, fontFamily: 'sans-serif'}} className="card-title"><strong>{title}</strong></h3>
      
        <p className="card-description">{description}</p>
        <img src={image} alt={`${title} logo`} className="card-image" style={{marginLeft: 60}}/>
        <div className="card-rating"> <strong>Rating: </strong>{rating} / 5</div>
        <br />
        <br />
    </div>
  );
};

export default CardTecnologia;