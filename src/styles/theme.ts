const colors = {
  blueColor: '#162950',
  backgroundColor: '#0F1624',
  whiteColor: '#FFFFFF',
  gradientColor: '#00d2ff',

};

const fontFamily = {
  default: "'Poppins', sans-serif",
};

const sizes = {
  sxmall: '1.6rem',
  small: '2rem',
  medium: '2.4rem',
  large: '2.8rem',
  xlarge: '3.2rem',
  xxlarge: '3.6rem',
  huge: '4.0rem',
  xhuge: '4.4rem',
};

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  fontFamily: { [key in keyof typeof fontFamily]: string };
  sizes: { [key in keyof typeof sizes]: string };
}

export const theme: StyleClosetTheme = { colors, fontFamily, sizes };
