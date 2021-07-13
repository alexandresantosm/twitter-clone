import styled from 'styled-components';

export const Container = styled.aside`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  footer {
    div,
    a {
      color: var(--gray-600);
      font-size: 0.75rem;
      text-decoration: none;
    }
  }
`;
