import { Icon } from '../../Icon';
import { Button } from '../../input/Button';
import {
  Avatar,
  Header,
  HeaderLink,
  Content,
  Title,
  BoxFollow,
  Footer,
} from './styles';

export function Follows() {
  return (
    <BoxFollow>
      <Header>
        <Title>Who to follow</Title>

        <HeaderLink href="">Refresh</HeaderLink>

        <HeaderLink href="">View all</HeaderLink>
      </Header>
      <Content>
        <li>
          <div className="profile">
            <Avatar src="images/avatar.png" alt="Avatar" />
            <div className="info">
              <strong>
                Spade <span>@spade</span>
              </strong>
              <Button isOutline={true}>Follow</Button>
            </div>
          </div>
          <a href="#">x</a>
        </li>
        <li>
          <div className="profile">
            <Avatar src="images/avatar.png" alt="Avatar" />
            <div className="info">
              <strong>
                Spade <span>@spade</span>
              </strong>
              <Button isOutline={true}>Follow</Button>
            </div>
          </div>
          <a href="#">x</a>
        </li>
        <li>
          <div className="profile">
            <Avatar src="images/avatar.png" alt="Avatar" />
            <div className="info">
              <strong>
                Spade <span>@spade</span>
              </strong>
              <Button isOutline={true}>Follow</Button>
            </div>
          </div>
          <a href="#">x</a>
        </li>
      </Content>
      <Footer>
        <svg
          width="14px"
          height="16px"
          viewBox="0 0 14 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>single-02</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="TWITTER-PROFILE-2018"
              transform="translate(-129.000000, -817.000000)"
              stroke="#3bb9e3"
            >
              <g id="Profile" transform="translate(0.000000, 341.000000)">
                <g id="Medias" transform="translate(128.000000, 475.000000)">
                  <g id="single-02" transform="translate(1.000000, 1.000000)">
                    <path
                      d="M8.5,10.5 L5.5,10.5 C2.73857625,10.5 0.5,12.7385763 0.5,15.5 L13.5,15.5 C13.5,14.1739176 12.9732158,12.902148 12.0355339,11.9644661 C11.097852,11.0267842 9.82608245,10.5 8.5,10.5 Z"
                      id="Shape"
                    ></path>
                    <circle id="Oval" cx="7" cy="4" r="3.5"></circle>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <a href="#">Find friends</a>
      </Footer>
    </BoxFollow>
  );
}
