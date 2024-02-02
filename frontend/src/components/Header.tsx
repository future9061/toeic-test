import React from 'react';
import Logo from './common/Logo';
import Mascort from './common/Mascort';
import { HeaderCSS } from '../style/components/common/HeaderCSS';

function Header() {
  return (
    <HeaderCSS>
      <Logo />
      <Mascort />
    </HeaderCSS>
  );
}

export default Header;
