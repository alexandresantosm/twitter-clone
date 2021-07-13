import { Icon } from '../../Icon';

import { Header, ContainerList, ContentList } from '../styles';
import { ItemFollower } from './styles';

export function Followers() {
  return (
    <ContainerList>
      <Header>
        <Icon src="images/followers.svg" alt="Followers" />
        73 followers that you know
      </Header>
      <ContentList>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
        <ItemFollower></ItemFollower>
      </ContentList>
    </ContainerList>
  );
}
