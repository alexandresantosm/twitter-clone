import styled from 'styled-components';

export const Container = styled.header`
  height: 2.875rem;
  background-color: var(--white-500);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
