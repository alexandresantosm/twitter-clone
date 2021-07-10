import { Container, TextInput, Avatar, Button } from './styles';

export function Side() {
  return (
    <Container>
      <TextInput type="text" placeholder="Search on twitter" />

      <Avatar src="/images/avatar.png" alt="Avatar" />

      <Button>Tweet</Button>
    </Container>
  );
}
