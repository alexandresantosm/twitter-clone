import styled from 'styled-components';

export const Container = styled.nav`
  border-bottom: 1px solid var(--gray-200);
  padding: 0.625rem 1rem;

  display: flex;
  gap: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--blue-300);
  font-size: 1.125rem;
  font-weight: bold;

  &.active {
    color: var(--gray-700);
  }
`;
