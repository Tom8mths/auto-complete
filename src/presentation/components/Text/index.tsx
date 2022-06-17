import * as S from './styles';

export type TextProps = {
  children: string | React.ReactNode;
  size?: 'xsmall' | 'small' | 'base' | 'large' | 'xlarge5';
  color?: 'white' | 'lightGray' | 'black' | 'purple';
  className?: string;
};

export default function Text({
  size = 'base',
  color = 'white',
  children,
  className = '',
}: TextProps) {
  return (
    <p className={`${S.text({ size, color })} ${className}`}>{children}</p>
  );
}
