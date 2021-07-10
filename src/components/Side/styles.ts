import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
`;

export const TextInput = styled.input`
  height: 2.125rem;
  width: 13.75rem;
  border: 1px solid var(--gray-200);
  padding: 0 1.875rem 0 0.75rem;
  border-radius: 1rem;
  color: var(--gray-550);
  font-size: 0.75rem;
  background: var(--gray-100) url('/images/search.svg') no-repeat 11.875rem
    center;
`;

export const Avatar = styled.img`
  height: 2.125rem;
  width: 2.125rem;
  border-radius: 50%;
  margin: 0 1rem;
`;

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
`;
