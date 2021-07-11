import styled from 'styled-components';

export const Container = styled.div`
  height: 3.6975rem;
  background-color: var(--white-500);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding-left: 17.8125rem;
`;

export const List = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.9375rem;
  color: var(--gray-550);
  position: relative;

  && + li {
    margin-left: 1rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: bold;
  }

  strong {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--gray-550);
  }

  &&.active {
    strong {
      color: var(--blue-300);
    }
  }

  &&.active::after {
    content: '';
    width: 100%;
    height: 0.125rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--blue-300);
  }
`;

export const Action = styled.div`
  display: flex;

  button {
    margin-right: 1.25rem;
  }
`;
