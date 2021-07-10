import styled from 'styled-components';

export const Container = styled.div`
  height: 23.75rem;
  width: 100%;
  background-color: var(--blue-300);
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  color: var(--gray-200);
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 2rem;

  span {
    color: var(--white-500);
  }
`;

export const Description = styled.h2`
  margin-top: 2rem;

  font-weight: normal;
  font-size: 1.5rem;
`;
