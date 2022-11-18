import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;

    return (
        <div className={`p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white card md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
               
            </div>
        </div>
    );
};

export default InfoCard;