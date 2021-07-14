import styled from 'styled-components';
import { Container as Box } from '../Box/styles';

export const Container = styled.section`
  flex: 1;
  margin: 1rem 1.25rem 0;
`;

export const Content = styled(Box)``;

export const TweetList = styled.ul`
  list-style: none;
`;

export const TweetItem = styled.li`
  border-bottom: 1px solid var(--gray-200);
  padding: 0.625rem 1rem;
  display: flex;

  .retweet {
    display: flex;
    align-items: center;
    font-size: 0.8125rem;
    color: var(--gray-400);
    font-weight: normal;
    margin-bottom: 0.5rem;
    margin-left: -0.5rem;

    img {
      width: 0.75rem;
      height: 0.75rem;
    }

    span {
      margin-left: 0.5rem;
    }
  }
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const Info = styled.div`
  margin-left: 0.625rem;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 0.875rem;
    color: var(--gray-750);

    span {
      font-size: 0.8125rem;
      color: var(--gray-400);
      font-weight: normal;
      position: relative;

      & + span {
        margin-left: 1rem;

        &::before {
          content: '';
          width: 0.125rem;
          height: 0.125rem;
          border-radius: 50%;
          background-color: var(--gray-400);
          position: absolute;
          left: -4px;
          top: 6px;
        }
      }
    }
  }

  p {
    font-size: 0.875rem;
    color: var(--gray-750);
    margin-top: 0.5rem;

    a {
      text-decoration: none;
      color: var(--blue-300);
    }
  }

  > a {
    text-decoration: none;
    color: var(--gray-400);
    margin-top: 0.5rem;
  }

  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
      height: 320px;
      width: 320px;
      padding: 1rem;
      border: 1px solid var(--gray-200);
      border-radius: 0.5rem 0.5rem 0 0;
    }

    div.legend {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gray-200);
      padding: 0.5rem;

      strong {
        font-size: 0.875rem;
        color: var(--gray-750);
      }

      p {
        font-size: 0.875rem;
        color: var(--gray-750);
        margin-top: 0.5rem;
      }

      span {
        font-size: 0.8125rem;
        color: var(--gray-400);
        margin-top: 0.25rem;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.75rem;
    color: var(--gray-550);

    span {
      margin-left: 0.5rem;
    }
  }
`;
