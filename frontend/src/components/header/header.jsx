import '../../styles/main.scss';
import './header.scss';
import React from 'react';
import Navigation from './navigation';
import HeaderImage from './headerImage';

export default function Header() {
  return (
    <header>
      <Navigation/>
      <HeaderImage/>
    </header>
  );
}
