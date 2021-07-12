import styled from 'styled-components';

export const Container = styled.aside`
  width: 16.25rem;

  display: flex;
  flex-direction: column;
`;

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

export const Followers = styled.div`
  margin-top: 1.25rem;
`;

export const Title = styled.strong`
  font-weight: normal;
  font-size: 0.875rem;
  color: var(--blue-300);

  display: flex;
  align-items: center;
`;

export const Gallery = styled.div`
  margin-top: 1.25rem;
`;

export const Content = styled.ul`
  list-style: none;
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
`;

export const ItemFollower = styled.li`
  width: 3rem;
  height: 3rem;
  background-color: var(--gray-300);
  border-radius: 50%;
`;

export const ItemGallery = styled.li`
  width: 5rem;
  height: 5rem;
  background-color: var(--gray-300);
  border-radius: 0.5rem;
`;
