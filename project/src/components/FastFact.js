import { GridColumn, GridRow } from 'emotion-flex-grid';
import React from 'react';

const FastFact = ({ text, number }) => {
  return (
    <GridRow className='Fast-fact' direction={'column'} align={'center'}>
      <GridColumn className='Fast-fact__text'>{text}</GridColumn>
      <GridColumn className='Fast-fact__number'>{number}</GridColumn>
    </GridRow>
  );
};

export default FastFact;
