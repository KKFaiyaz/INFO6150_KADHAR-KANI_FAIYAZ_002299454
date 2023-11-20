import React from 'react';
import Card from '../Card/Card';

const Home = () => {
  const cards = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
  ];

  return (
    <div className="container">
      <h2>Welcome to the Home Page</h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default Home;
