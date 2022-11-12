import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening hours',
            description : 'Open 10.00 am to 5 pm every day',
            icon : clock,
            bgClass : 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description : 'Kamalgonj, Moulvibazar, Sylhet',
            icon : marker,
            bgClass : 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description : '01748-433092',
            icon : phone,
            bgClass : 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card= {card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;