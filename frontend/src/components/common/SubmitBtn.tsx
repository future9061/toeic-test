import React from 'react';
import { SubmitBtnCSS } from '../../style/components/common/SubmitBtnCSS';
import { SubmitBtnProps } from '../../types/SubmitBtnProps';

function SubmitBtn({ children, bgColor, color }: SubmitBtnProps) {
  return <SubmitBtnCSS children={children} bgColor={bgColor} color={color} />;
}

export default SubmitBtn;
