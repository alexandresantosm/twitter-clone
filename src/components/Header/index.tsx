import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { Side } from '../Side';
import { Wrapper } from '../Wrapper';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Navigation />

          <Logo />

          <Side />
        </Content>
      </Wrapper>
    </Container>
  );
}
