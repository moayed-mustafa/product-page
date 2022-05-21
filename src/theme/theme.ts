export const Colors = {
  black: () => "#1D2026",
  grey: () => "#69707D",
  white: () => "#FFFFFF",
  lightGrey: () => "#F6F8FD",
  disabledGrey: () => "#B6BCC8",
  hoverGrey: () => "#979797",
  orange: () => "#FF7E1B",
  hoverOrange: () => "#FFAB6A",
  lightOrange: () => "#FFEEE2",
};

export const theme = {
  palette: {
    primary: Colors.black(),
    background: Colors.white(),
    hover: Colors.hoverOrange(),
    nav: Colors.lightGrey(),
    badge: Colors.lightOrange(),
    border: Colors.disabledGrey(),
    button: {
      primary: Colors.orange(),
      secondary: Colors.lightGrey(),
    },
    text: {
      primary: Colors.black(),
      secondary: Colors.lightGrey(),
      disabled: Colors.disabledGrey(),
      brand: Colors.orange(),
    },
  },
  breakpoints: ['1440px', '786px', '375px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  sizes: {
    body: '800px',
  },
  fonts: {
    heading: 'Kumbh Sans, Roboto, Inter, system-ui, sans-serif',
    body: 'Kumbh Sans, Roboto, Inter, system-ui, sans-serif',
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '36px',
    '48px',
  ],
  fontWeights: {
    heading: 700,
    mid: 600,
    body: 400,
  },
  lineHeights: {
    heading: '48px',
    mid: '26px',
    body: '35px',
  },
};
