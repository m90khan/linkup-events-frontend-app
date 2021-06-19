import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { NextPage, GetServerSideProps } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { API_URL } from '../config';
import EventItem from '../components/EventItem';
import Link from 'next/link';
import { event } from './../config/types';
import { Title } from '../styles/styles';
import Features from './../components/Features';
import { Flex } from '../styles/styles';

const Home = ({ events }: { events: event[] }) => {
  return (
    <Layout title='Home'>
      <Features />
      {events.length === 0 && <h3>No events to show</h3>}

      <Title>Upcoming Events</Title>
      {events && events.map((evt: event) => <EventItem key={evt.id} evt={evt} />)}

      {events.length > 0 && (
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <Link href='/events'>
            <a className='btn btn-large'>View All Events</a>
          </Link>
        </div>
      )}
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // test git
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=4`);
  const events: event[] = await res.json();
  return { props: { events: events }, revalidate: 1 };
};
