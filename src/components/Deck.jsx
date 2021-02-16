import React from 'react';

const Deck = ({ cards }) => {
    return (
    <div className='section-center'>
        {cards.map((clowCard) => {
            const { id, title, img, desc, guardian } = clowCard;
            return (
                <article key={id} className='clow-card'>
                    <img src={img} alt={title} className='photo'/>
                    <div className='card-info'>
                        <header>
                            <h4>{ title }</h4>
                            <h4 className='guardian'>{ guardian }</h4>
                        </header>
                        <p className='card-text'>{ desc }</p>
                    </div>
                </article>
            );
        })}
    </div>
    );
};

export default Deck;