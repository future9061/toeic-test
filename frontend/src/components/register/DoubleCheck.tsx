import React, { ReactNode } from 'react';
import { DoubleCheckCSS } from '../../style/components/register/DoubleCheckCSS';

type DoubleCheckProps = {
  children: ReactNode;
};

function DoubleCheck({ children }: DoubleCheckProps) {
  return <DoubleCheckCSS children={children} />;
}

export default React.memo(DoubleCheck);
