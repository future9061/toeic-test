import { css } from 'styled-components';

const media = {
  smallMobile: (...args: Parameters<typeof css>) => css`
    @media (max-width: 360px) {
      ${css(...args)}
    }
  `,
  largeMobile: (...args: Parameters<typeof css>) => css`
    @media (min-width: 361px) and (max-width: 768px) {
      ${css(...args)}
    }
  `,
  tablet: (...args: Parameters<typeof css>) => css`
    @media (min-width: 769px) and (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  desktop: (...args: Parameters<typeof css>) => css`
    @media (min-width: 1025px) {
      ${css(...args)}
    }
  `,
};

export { media };
