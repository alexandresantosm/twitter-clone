import { Container, Content, Title, Description } from './styles';

export function Banner() {
  return (
    <Container>
      <Content>
        <Title>
          Created by <span>@alesanezes</span> &amp; update by{' '}
          <span>@exibit</span>
        </Title>
        <Description>
          Feel free to share, use and spread the world with it !
        </Description>
      </Content>
    </Container>
  );
}
