import { Icon } from '../../Icon';

import {
  Avatar,
  Bio as BioStyled,
  InfoItem,
  InfoList,
  Name,
  UserName,
} from './styles';

export function Bio() {
  return (
    <>
      <Avatar src="images/avatar.png" alt="Avatar" />

      <Name>Alexandre Santos</Name>
      <UserName>@Exibit</UserName>

      <BioStyled>
        Web, Desing &amp; Rock &apos;n roll Partner/UI Designer @spade_be
        Musican in @dashboxmusic
      </BioStyled>

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
    </>
  );
}
