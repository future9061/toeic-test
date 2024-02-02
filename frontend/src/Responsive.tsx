import { useMediaQuery } from 'react-responsive';

interface ResponsiveProps {
  children: JSX.Element;
}

export const SmallMobile = ({
  children,
}: ResponsiveProps): JSX.Element | null => {
  const isSmallMobile = useMediaQuery({ maxWidth: 360 });
  return isSmallMobile ? children : null;
};

export const LargeMobile = ({
  children,
}: ResponsiveProps): JSX.Element | null => {
  const isLargeMobile = useMediaQuery({ minWidth: 361, maxWidth: 768 });
  return isLargeMobile ? children : null;
};

export const Tablet = ({ children }: ResponsiveProps): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  return isTablet ? children : null;
};

export const DeskTop = ({ children }: ResponsiveProps): JSX.Element | null => {
  const isDeskTop = useMediaQuery({ minWidth: 1025 });
  return isDeskTop ? children : null;
};
