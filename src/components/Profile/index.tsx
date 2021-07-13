import { Bio } from './Bio';
import { Followers } from './Followers';
import { Gallery } from './Gallery';

import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <Bio />

      <Followers />

      <Gallery />
    </Container>
  );
}
