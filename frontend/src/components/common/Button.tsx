import React from 'react';
import { ButtonCSS } from '../../style/components/common/ButtonCSS';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../types/ButtonPtops';

function Button({
  children,
  textsize,
  bgcolor,
  color = '#fff',
  id,
}: ButtonProps) {
  const navigate = useNavigate();

  const handlePath = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickElem = e.target as HTMLButtonElement;

    navigate(`/${clickElem.id}`);
  };

  return (
    <ButtonCSS
      children={children}
      textsize={textsize}
      bgcolor={bgcolor}
      color={color}
      id={id}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePath(e)}
    />
  );
}

export default React.memo(Button);
