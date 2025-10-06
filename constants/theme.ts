export const Colors = {
  light: {
    primary: '#2E7D32',
    secondary: '#00897B',
    tertiary: '#1565C0',
    background: '#F9FAFB',
    card: '#FFFFFF',
    text: '#212121',
    textSecondary: '#616161',
    border: '#E0E0E0',
    success: '#43A047',
    warning: '#F9A825',
    error: '#D32F2F',
    info: '#0288D1',
  },
  dark: {
    primary: '#2E7D32',
    secondary: '#00897B',
    tertiary: '#1565C0',
    background: '#121212',
    card: '#1E1E1E',
    text: '#E0E0E0',
    textSecondary: '#BDBDBD',
    border: '#2C2C2C',
    success: '#43A047',
    warning: '#F9A825',
    error: '#D32F2F',
    info: '#0288D1',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const BorderRadius = {
  card: 8,
  button: 20,
  input: 12,
  small: 4,
  large: 16,
};

export const Typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    heading: 28,
    title: 32,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    bold: '700' as const,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
};

export const Shadows = {
  light: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
  dark: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 3,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};
