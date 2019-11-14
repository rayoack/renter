import React from 'react';

import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo-renter.svg';
import './styles.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="Logo Renter" />

        <nav>
          <NavLink exact to='/' className="nav-link" activeClassName="nav-active">INICIO</NavLink>
          <NavLink to='/catalogo' className="nav-link" activeClassName="nav-active">CATALOGO</NavLink>
          <NavLink to='/favoritos' className="nav-link" activeClassName="nav-active">FAVORITOS</NavLink>
        </nav>
      </div>
    </header>
  );
}
