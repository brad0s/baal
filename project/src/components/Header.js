import { GridColumn, GridRow } from 'emotion-flex-grid';
import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header id='header'>
      <GridRow justify={'between'} direction={'row'} align={'center'}>
        <GridColumn>
          <div className='Header'>
            <img src={logo} alt='logo' />
          </div>
        </GridColumn>

        <nav className='Nav'>
          <GridColumn>
            <ul>
              <li>
                <a href='#'>Deposit</a>
              </li>
              <li>
                <a href='#'>Dashboard</a>
              </li>
              <li>
                <a href='#'>Company</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
            </ul>
          </GridColumn>
        </nav>

        <GridColumn textAlign={'right'}>
          <button className='hamburger' id='hamburger' title='Menu'></button>
        </GridColumn>
      </GridRow>
    </header>
  );
};

export default Header;
