import React, { useState } from 'react';
import Deck from './components/Deck';
import Categories from './components/Categories';
import deck from './data';
import './App.css';

const AllCategories = ['all', ...new Set(deck.map((card) => card.category))];

function App() {
  const [ clowCards, setClowCards] = useState(deck);
  const [categories, setCategories] = useState(AllCategories);

  const filterCards = (category) => {
    if (category === 'all') {
      setClowCards(deck);
      return;
    }
    const newCards = deck.filter((card) => card.category === category);
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
        <Deck deck={clowCards} />
      </section>
    </main>
  );
}

export default App;
