import { GridColumn, GridRow, GridWrap } from 'emotion-flex-grid';
import React from 'react';
import RoundButton from './buttons/RoundButton';
import SecondaryButton from './buttons/SecondaryButton';
import FastFact from './FastFact';
import { subtitle, facts } from '../data/data';
import CreditCard from './CreditCard';
import hand from '../assets/hand.svg';

const Hero = () => {
  return (
    <section id='hero'>
      <GridRow className='Hero' wrap={'wrap'}>
        <GridColumn width={[12, 12, 12, 7]}>
          <GridWrap maxWidth={557}>
            <GridColumn width={12}>
              <h1 className='Hero__title'>
                All the <span>experience</span> in the new credit card
                <span className='asterisks'></span>
                <span className='starts stars--mobile'></span>
              </h1>
            </GridColumn>
          </GridWrap>

          <GridWrap maxWidth={557}>
            <GridColumn width={12}>
              <button
                className='link arrow--link'
                title='Go to card page'
              ></button>
            </GridColumn>
          </GridWrap>

          <GridWrap maxWidth={557}>
            <GridColumn width={12}>
              <GridWrap maxWidth={395} style={{ margin: 0 }}>
                <p className='Hero__subtitle'>{subtitle.text}</p>
              </GridWrap>
            </GridColumn>
          </GridWrap>

          <GridWrap maxWidth={557}>
            <GridRow className='Hero__buttons'>
              <RoundButton text='Order a card' bgColor='#11253E' />
              <SecondaryButton text='How it works' />
            </GridRow>
          </GridWrap>

          <GridWrap maxWidth={557}>
            <GridRow
              className='Hero__facts'
              align={'center'}
              justify={'between'}
            >
              {facts.map((fact) => (
                <GridColumn key={fact.id}>
                  <FastFact text={fact.text} number={fact.number} />
                </GridColumn>
              ))}
            </GridRow>
          </GridWrap>
        </GridColumn>

        <GridColumn width={[12, 12, 12, 5]} className='Hero__card'>
          <div className='cards-wrapper'>
            <CreditCard text='$12,445.00' code='**5678' />
            <CreditCard cardStyle='purple' />
          </div>
          <div className='cards-wrapper cards-wrapper--desktop'>
            <CreditCard text='MAURICIO LÓPEZ' code='5678' cardStyle='white' />
          </div>
        </GridColumn>
      </GridRow>
    </section>
  );
};

export default Hero;
