import styled from 'styled-components';

export const Container = styled.nav``;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;

  font-size: 0.8125rem;
  color: var(--gray-550);
  font-weight: bold;

  &&:not(:first-child) {
    margin-left: 1.875rem;
  }
`;
