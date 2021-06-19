import Head from 'next/head';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'css-in-js-media';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter, NextRouter } from 'next/router';
interface Props {
  title: string | null;
  keywords?: string | null;
  description?: string | null;
  children?: ReactNode;
  functionChildren?: (name: string) => React.ReactNode;
}
function Layout({ title, keywords, description, children }: Props) {
  // function Layout({ title, keywords, description, children }: Props) {
  const router: NextRouter = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}

      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: 'NotMeetUp | Find new events',
  description: 'Find the latest meetups and seminars in your city ',
  keywords: 'startup, meetup, events,seminars ',
};

const Container = styled.div`
  margin: 6rem auto;
  max-width: 80%;
  min-height: 70vh;
  padding: 0 3rem;
  ${media('<=phone')} {
    max-width: 95%;
    padding: 0 1rem;
  }
`;
export default Layout;
/*
smallPhone: 320
phone: 600
tablet: 768
desktop: 1024
largeDesktop: 1440
*/
