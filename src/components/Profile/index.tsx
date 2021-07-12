import { Icon } from '../Icon';
import {
  Container,
  Avatar,
  Name,
  UserName,
  Bio,
  InfoList,
  InfoItem,
  Followers,
  Gallery,
  Title,
  Content,
  ItemFollower,
  ItemGallery,
} from './styles';

export function Profile() {
  return (
    <Container>
      <Avatar src="images/avatar.png" alt="Avatar" />

      <Name>Alexandre Santos</Name>
      <UserName>@Exibit</UserName>

      <Bio>
        Web, Desing &amp; Rock &apos;n roll Partner/UI Designer @spade_be
        Musican in @dashboxmusic
      </Bio>

      <InfoList>
        <InfoItem>
          <Icon src="images/place.svg" alt="Place" />
          Namur, Belgium
        </InfoItem>
        <InfoItem>
          <Icon src="images/url.svg" alt="Url" />
          exibit.be
        </InfoItem>
        <InfoItem>
          <Icon src="images/joined.svg" alt="Joined" />
          Joined June 2007
        </InfoItem>
        <InfoItem>
          <Icon src="images/born.svg" alt="Born" />
          Born the 20th of June 1978
        </InfoItem>
      </InfoList>

      <Followers>
        <Title>
          <Icon src="images/followers.svg" alt="Followers" />
          73 followers that you know
        </Title>
        <Content>
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
        </Content>
      </Followers>

      <Gallery>
        <Title>
          <Icon src="images/images.svg" alt="Images" />
          266 Photos and videos
        </Title>
        <Content>
          <ItemGallery></ItemGallery>
          <ItemGallery></ItemGallery>
          <ItemGallery></ItemGallery>
          <ItemGallery></ItemGallery>
          <ItemGallery></ItemGallery>
          <ItemGallery></ItemGallery>
        </Content>
      </Gallery>
    </Container>
  );
}
