import { ReactNode } from 'react';

import { Container } from './styles';

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <Container>{children}</Container>;
}
