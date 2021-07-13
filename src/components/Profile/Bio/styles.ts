import styled from 'styled-components';

export const Avatar = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  border: 5px solid var(--white-500);

  margin-top: -8.125rem;
`;

export const Name = styled.h1`
  font-size: 1.3125rem;
  color: var(--gray-700);
  margin-top: 0.625rem;
`;

export const UserName = styled.span`
  font-size: 0.875rem;
  color: var(--gray-600);
`;

export const Bio = styled.p`
  font-size: 0.875rem;
  color: var(--gray-700);
  margin-top: 0.9375rem;
`;

export const InfoList = styled.ul`
  margin-top: 1.25rem;
  list-style: none;
`;

export const InfoItem = styled.li`
  font-size: 0.875rem;
  color: var(--gray-500);

  display: flex;
  align-items: center;

  && + li {
    margin-top: 0.3125rem;
  }
`;
