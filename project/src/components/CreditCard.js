import { GridColumn, GridRow } from 'emotion-flex-grid';
import React from 'react';
import logo from '../assets/logo.svg';
import chip from '../assets/card-chip.svg';
import cardLogos from '../assets/card-logo.svg';
import cardAsterisks from '../assets/card-asterisks.svg';

const CreditCard = ({ text = '', code = '', cardStyle = 'default' }) => {
  return (
    <div className={`Credit-card Credit-card--${cardStyle}`}>
      <GridRow className='Credit-card__top' align={'center'}>
        <GridColumn>
          <img src={logo} alt='logo' className='logo' />
        </GridColumn>
        <GridColumn flex={0}>
          <img
            className='symbols'
            src={cardLogos}
            alt='Credit card logo and symbol'
          />
        </GridColumn>
      </GridRow>
      <GridRow className='Credit-card__chip'>
        <img src={chip} alt='Credit card chip' />
      </GridRow>
      <GridRow className='Credit-card__text'>{text}</GridRow>
      <GridRow className='Credit-card__code'>{code}</GridRow>
    </div>
  );
};

export default CreditCard;
