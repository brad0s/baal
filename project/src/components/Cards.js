import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
  const [cards, setCards] = useState(null);
  const cardsToRender = [];

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch(
        'https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf'
      );
      const cards = await res.json();
      setCards(cards);
    };
    fetchCards();
  }, []);

  if (cards) {
    for (let i = 0; i < 6; i++) {
      cardsToRender.push(
        <GridColumn key={cards[i].title} className='Card__wrapper'>
          <Card card={cards[i]} />
        </GridColumn>
      );
    }
  }

  return (
    <GridWrap className='Cards' maxWidth={'none'}>
      <GridRow direction={'column'} align={'center'}>
        <GridRow>
          <h2 className='Cards__title'>Experience the Cardo</h2>
        </GridRow>

        <GridRow wrap={'wrap'} className='Cards__list' justify={'center'}>
          {cardsToRender}
        </GridRow>
      </GridRow>
    </GridWrap>
  );
};

export default Cards;
