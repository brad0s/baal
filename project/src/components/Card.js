import { GridRow } from 'emotion-flex-grid';
import React from 'react';
import RoundButton from './buttons/RoundButton';

const Card = ({ card }) => {
  const { title, description, button } = card;
  const { link, text } = button;
  return (
    <div className='Card'>
      <GridRow direction={'column'}>
        <h3 className='Card__title'>{title}</h3>
        <p className='Card__description'>{description}</p>
        <RoundButton text={text} bgColor={'#A5AFD4'} link={link} />
      </GridRow>
    </div>
  );
};

export default Card;
