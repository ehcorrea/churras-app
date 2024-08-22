import { rfvalue, rhvalue, rwvalue } from '@/utils/responsive/responsive';

export const theme = {
  font: {
    weight: {
      light: 'SofiaPro-Light',
      regular: 'SofiaPro-Regular',
      medium: 'SofiaPro-Medium',
      semi: 'SofiaPro-SemiBold',
      bold: 'SofiaPro-Bold',
    },
    size: {
      small: rfvalue(12),
      medium: rfvalue(15),
      large: rfvalue(18),
      xlarge: rfvalue(24),
      huge: rfvalue(30),
      xhuge: rfvalue(36),
    },
  },
  colors: {
    primary: {
      main: '#FE724C',
      80: '#FE8160',
      50: '#FEA58D',
      20: '#FED2C7',
    },
    secondary: {
      main: '#FFC529',
      80: '#FFD050',
      50: '#FFDF8B',
      20: '#FFEFC3',
    },
    black: {
      main: '#1A1D26',
      80: '#2A2F3D',
      50: '#4D5364',
      20: '#6E7489',
    },
    white: {
      main: '#FFFFFF',
      80: '#FFFFFF',
      50: '#FFFFFF',
      20: '#FFFFFF',
    },
    gray: {
      main: '#9A9FAE',
      80: '#A8ACB9',
      50: '#C4C7D0',
      20: '#EBEBEB',
    },
    error: {
      main: '#F30000',
      80: '#F34C4C',
      50: '#F38585',
      20: '#F3BEBE',
    },
  },
  size: {
    button: {
      small: rhvalue(45),
      medium: rhvalue(50),
      large: rhvalue(55),
      huge: rhvalue(60),
    },
  },
  rfvalue,
  rwvalue,
  rhvalue,
} as const;
