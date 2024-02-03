import React from 'react';
import { SubmitBtnCSS } from '../../style/components/common/SubmitBtnCSS';
import { SubmitBtnProps } from '../../types/SubmitBtnProps';

function SubmitBtn({ children, bgcolor, color }: SubmitBtnProps) {
  return <SubmitBtnCSS children={children} bgcolor={bgcolor} color={color} />;
}

export default SubmitBtn;
