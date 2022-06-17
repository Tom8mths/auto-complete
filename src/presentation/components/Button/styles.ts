import { ButtonProps } from '.';

type ButtonStyleProps = Pick<ButtonProps, 'size' | 'color' | 'fullWidth'>;

const sizeModiffiers = {
  smallest: 'px-3 py-1.5',
  small: 'px-6 py-2',
  medium: 'px-8 py-4',
  large: 'px-10 py-6',
};

const colorModiffiers = {
  primary: 'bg-pgfy-primary-pink hover:bg-pink-600',
  purple: 'bg-purple-500 hover:bg-purple-600',
  transparent:
    'bg-transparent hover:bg-neutral-600 text-neutral-400 hover:text-white',
};

export const button = ({ size, color, fullWidth }: ButtonStyleProps) => `
  inline-flex
  justify-center
  items-center
  font-bold
  text-white
  rounded
  h-fit

  disabled:cursor-not-allowed

  ${fullWidth ? 'w-full' : 'w-fit'}
  ${!!size && sizeModiffiers[size]}
  ${!!color && colorModiffiers[color]}
`;
