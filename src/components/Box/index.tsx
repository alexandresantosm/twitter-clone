import { ReactNode } from 'react';
import { Container } from './styles';

interface BoxProps {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return <Container>{children}</Container>;
}
