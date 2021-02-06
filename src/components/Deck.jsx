import React from 'react';

const Deck = ({ deck }) => {
    <div className='section-center'>
        {deck.map((clowCard) => {
            const { id, title, img, desc, price } = clowCard;
            return (
                <article key={id} className='clow-card'>
                    <img src={img} alt={title} className='photo'/>
                    <div className='card-info'>
                        <header>
                            <h4>{ title }</h4>
                            <h4 className='price'>{ price }</h4>
                        </header>
                        <p className='card-text'>{ desc }</p>
                    </div>
                </article>
            );
        })}
    </div>
};

export default Deck;