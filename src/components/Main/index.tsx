import { Profile } from '../Profile';
import { Timeline } from '../Timeline';
import { Widgets } from '../Widgets';
import { Wrapper } from '../Wrapper';
import { Container, Content } from './styles';

export function Main() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Profile />

          <Timeline />

          <Widgets />
        </Content>
      </Wrapper>
    </Container>
  );
}
