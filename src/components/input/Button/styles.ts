import styled from 'styled-components';

export const Button = styled.button`
  height: 2.125rem;
  width: 5.625rem;
  background-color: var(--blue-300);

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 0.875rem;
  color: var(--white-500);
  border: 0;
  border-radius: 1rem;

  &&.outline {
    background-color: transparent;
    color: var(--blue-300);
    border: 1px solid var(--blue-300);
  }

  &&:hover {
    filter: brightness(0.9);
  }
`;
