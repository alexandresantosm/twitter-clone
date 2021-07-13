import styled from 'styled-components';
import { Container } from '../../Box/styles';

export const BoxFollow = styled(Container)``;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
`;

export const HeaderLink = styled.a`
  color: var(--blue-300);
  font-size: 0.75rem;
  text-decoration: none;
  padding-left: 0.625rem;
  position: relative;

  &::before {
    content: '';
    width: 0.125rem;
    height: 0.125rem;
    border-radius: 50%;
    background-color: var(--gray-750);
    position: absolute;
    left: 4px;
    top: 6px;
  }
`;

export const Title = styled.strong`
  font-size: 1.125rem;
  color: var(--gray-700);
`;

export const Content = styled.ul`
  list-style: none;
  margin-top: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--gray-250);

    .profile {
      display: flex;
      align-items: center;

      .info {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;

        strong {
          font-size: 14px;
          color: var(--gray-750);

          span {
            font-weight: normal;
            color: var(--gray-550);
          }
        }

        button {
          height: 27px;
          margin-right: 0;
          margin-top: 0.5rem;
        }
      }
    }

    a {
      text-decoration: none;
      color: var(--gray-250);
      font-size: 0.875rem;
    }
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 50%;
`;
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;

  a {
    color: var(--blue-300);
    font-size: 0.75rem;
    text-decoration: none;
    margin-left: 0.5rem;
  }
`;
