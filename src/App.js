import React, { useState } from 'react';
import Deck from './components/Deck';
import Categories from './components/Categories';
import cards from './data';

const AllCategories = ['all', ...new Set(cards.map((card) => card.category))];

function App() {
  const [clowCards, setClowCards] = useState(cards);
  const [categories, setCategories] = useState(AllCategories);

  const filterCards = (category) => {
    if (category === 'all') {
      setClowCards(cards);
      return;
    }
    const newCards = cards.filter((card) => card.category === category);
    setClowCards(newCards);
  };

  return (
    <main>
      <section className='deck-section'>
        <div className='title'>
          <h2>clow cards</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterCards={filterCards}/>
        <Deck cards={clowCards} />
      </section>
    </main>
  );
}

export default App;
