import { Follows } from './Follows';
import { Container } from './styles';
import { Trends } from './Trends';

export function Widgets() {
  return (
    <Container>
      <Follows />

      <Trends />

      <footer>
        <div>
          @ 2018 Twitter <a href="">À propos</a>
        </div>
        <div>
          <a href="">Centro d&lsquo;assistence</a> <a href="">Conditions</a>
        </div>
        <div>
          <a href="">Politique deconfidentialité</a> <a href="">Cookies</a>
        </div>
        <a href="">Informations sur la publicité</a>
      </footer>
    </Container>
  );
}
