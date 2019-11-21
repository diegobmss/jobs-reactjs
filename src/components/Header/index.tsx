import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="Jobs" />
      </Link>
    </StyledHeader>
  );
}
