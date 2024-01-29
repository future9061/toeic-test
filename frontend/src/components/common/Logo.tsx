import React from 'react';
import { LogoCSS } from '../../style/components/common/LogoCSS';
import { useNavigate } from 'react-router';

export type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  const navigate = useNavigate();

  return (
    <LogoCSS className={className} onClick={() => navigate('/')}>
      <img src={`${process.env.PUBLIC_URL}/img/logo.webp`} alt="logo" />
    </LogoCSS>
  );
}

export default Logo;
