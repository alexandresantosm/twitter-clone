import { Container, Link } from './styles';

export function TimelineNav() {
  return (
    <Container>
      <Link className="active" href="#">
        Tweets
      </Link>
      <Link href="#">Tweets and replies</Link>
      <Link href="#">Medias</Link>
    </Container>
  );
}
