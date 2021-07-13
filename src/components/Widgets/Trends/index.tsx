import {
  BoxTrend,
  Header,
  HeaderLink,
  Title,
  Content,
  TrendLink,
} from './styles';

export function Trends() {
  return (
    <BoxTrend>
      <Header>
        <Title>Trends</Title>

        <HeaderLink href="#">Change</HeaderLink>
      </Header>

      <Content>
        <TrendLink>#SportInfoDay</TrendLink>
        <TrendLink>#womenleaders</TrendLink>
        <TrendLink>#VisitesDomiciliaires</TrendLink>
        <TrendLink>European Parllament</TrendLink>
        <TrendLink>#blindgetrouwd</TrendLink>
        <TrendLink>#UXDesign</TrendLink>
        <TrendLink>#UIDesign</TrendLink>
        <TrendLink>#CleanAirNow</TrendLink>
      </Content>
    </BoxTrend>
  );
}
