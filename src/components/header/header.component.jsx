import React from 'react';

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';

import  './header.styles.scss';

const Header = () =>(
  <div className='header'>
      <Link className='logo-container' to='/'>
        <logo className='logo'   />
          <img src={logo} alt="Logo"  width="95px" height="95px" />
          
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'> SHOP</Link>
        <Link className='option' to='/shop'> CONTACT</Link>
      </div>
  </div>
)

export default Header;