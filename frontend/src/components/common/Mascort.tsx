import React from 'react';
import { MascortCSS } from '../../style/components/common/MascortCSS';

export type MascortProps = {
  size?: string;
};

function Mascort({ size }: MascortProps) {
  return (
    <MascortCSS size={size}>
      <img src={`${process.env.PUBLIC_URL}img/mascort.webp`} alt="마스코트" />
    </MascortCSS>
  );
}

export default Mascort;
