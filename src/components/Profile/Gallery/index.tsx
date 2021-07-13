import { Icon } from '../../Icon';

import { Header, ContainerList, ContentList } from '../styles';
import { ItemGallery } from './styles';

export function Gallery() {
  return (
    <ContainerList>
      <Header>
        <Icon src="images/images.svg" alt="Images" />
        266 Photos and videos
      </Header>
      <ContentList>
        <ItemGallery></ItemGallery>
        <ItemGallery></ItemGallery>
        <ItemGallery></ItemGallery>
        <ItemGallery></ItemGallery>
        <ItemGallery></ItemGallery>
        <ItemGallery></ItemGallery>
      </ContentList>
    </ContainerList>
  );
}
