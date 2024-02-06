export const white = {
  '100': '#FFFFFF',
  '030': 'rgba(255, 255, 255, 0.3)',
  '050': 'rgba(255, 255, 255, 0.5)',
} as const;

export const black = {
  '100': '#181E2D',
  '030': 'rgba(24, 30, 45, 0.3)',
  '050': 'rgba(24, 30, 45, 0.5)',
  '080': 'rgba(24, 30, 45, 0.8)',
} as const;

const opacity = {
  white,
  black,
} as const;

export default opacity;
