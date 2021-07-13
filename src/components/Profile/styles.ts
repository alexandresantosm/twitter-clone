import styled from 'styled-components';

export const Container = styled.aside`
  width: 16.25rem;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.strong`
  font-weight: normal;
  font-size: 0.875rem;
  color: var(--blue-300);

  display: flex;
  align-items: center;
`;

export const ContainerList = styled.div`
  margin-top: 1.25rem;
`;

export const ContentList = styled.ul`
  list-style: none;
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
`;
