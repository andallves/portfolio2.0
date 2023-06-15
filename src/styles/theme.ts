const colors = {
  blueColor: '#162950',
  backgroundColor: '#0F1624',
  whiteColor: '#FFFFFF',
  gradientColor: '#2bc0e4' /* fallback for old browsers */,
  gradientColorLagacy:
    '-webkit-linear-gradient(to right, #2bc0e4, #eaecc6)' /* Chrome 10-25, Safari 5.1-6 */,
  gradientColorActually:
    'linear-gradient(to right, #2bc0e4, #eaecc6)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
};

const fontFamily = {
  default: "'Poppins', sans-serif",
};

const sizes = {
  sxmall: '2rem',
  small: '2.4rem',
  medium: '2.8rem',
  large: '3.2rem',
  xlarge: '3.6rem',
  xxlarge: '4.2rem',
  huge: '4.8rem',
  xhuge: '6.4rem',
};

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  fontFamily: { [key in keyof typeof fontFamily]: string };
  sizes: { [key in keyof typeof sizes]: string };
}

export const theme: StyleClosetTheme = { colors, fontFamily, sizes };
