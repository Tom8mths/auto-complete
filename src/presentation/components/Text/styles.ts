import { TextProps } from '.';

type TextStyleProps = Pick<TextProps, 'color' | 'size'>;

export const sizeModiffiers = {
  xsmall: 'text-xs',
  small: 'text-sm',
  base: 'text-base',
  large: 'text-lg',
  xlarge5: 'text-5xl',
};

export const colorModiffiers = {
  white: 'text-white',
  black: 'text-black',
  lightGray: 'text-neutral-400',
  purple: 'text-purple-500',
};

export const text = ({ color, size }: TextStyleProps) => `
  ${!!size && sizeModiffiers[size]}
  ${!!color && colorModiffiers[color]}
`;
