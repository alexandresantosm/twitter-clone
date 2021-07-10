import { Container, Nav, NavItem, Icon } from './styles';

export function Navigation() {
  return (
    <Container>
      <Nav>
        <NavItem>
          <Icon src="/images/home.svg" alt="Home icon" />
          Home
        </NavItem>
        <NavItem>
          <Icon src="/images/notification.svg" alt="Notification icon" />
          Notifications
        </NavItem>
        <NavItem>
          <Icon src="/images/message.svg" alt="Message icon" />
          Messages
        </NavItem>
      </Nav>
    </Container>
  );
}
