import { Button } from '../input/Button';

import { Container, TextInput, Avatar } from './styles';

export function Side() {
  return (
    <Container>
      <TextInput type="text" placeholder="Search on twitter" />

      <Avatar src="/images/avatar.png" alt="Avatar" />

      <Button isOutline={false}>Tweet</Button>
    </Container>
  );
}
