import styled from 'styled-components';
import { Container } from '../../Box/styles';

export const BoxTrend = styled(Container)``;

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

export const Content = styled.div`
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
`;

export const TrendLink = styled.a`
  color: var(--blue-300);
  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;

  & + a {
    margin-top: 0.1rem;
  }
`;
