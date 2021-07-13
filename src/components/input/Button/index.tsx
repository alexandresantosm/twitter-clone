import { ButtonHTMLAttributes } from 'react';
import { Button as ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isOutline?: boolean | true;
}

export function Button({ children, isOutline, ...props }: ButtonProps) {
  return (
    <ButtonStyled className={isOutline && 'outline'} {...props}>
      {children}
    </ButtonStyled>
  );
}
