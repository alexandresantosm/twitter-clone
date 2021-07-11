import { Banner } from '../components/Banner';
import { Bar } from '../components/Bar';
import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <Bar />

      <GlobalStyles />
    </>
  );
}
