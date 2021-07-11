import { Icon } from '../Icon';
import { Button } from '../input/Button';
import { Wrapper } from '../Wrapper';

import { Container, Content, List, Item, Action } from './styles';

export function Bar() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <List>
            <Item className="active">
              <span>Tweets</span>
              <strong>3931</strong>
            </Item>
            <Item>
              <span>Followings</span>
              <strong>654</strong>
            </Item>
            <Item>
              <span>Followers</span>
              <strong>387</strong>
            </Item>
            <Item>
              <span>Favorites</span>
              <strong>265</strong>
            </Item>
            <Item>
              <span>Lists</span>
              <strong>8</strong>
            </Item>
            <Item>
              <span>Moments</span>
              <strong>0</strong>
            </Item>
          </List>

          <Action>
            <Button isOutline={true}>Follow</Button>
            <Icon src="images/more.svg" alt="More" />
          </Action>
        </Content>
      </Wrapper>
    </Container>
  );
}
