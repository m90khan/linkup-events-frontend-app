import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '../../config';
import EventItem from '../../components/EventItem';
import Layout from '../../components/Layout';
import { GetServerSideProps, NextPage } from 'next';
import { event } from '../../config/types';

const SearchPage = ({ events }: { events: event[] }) => {
  const router = useRouter();

  return (
    <Layout title='Search Results'>
      <Link href='/events'>
        <a className='btn-secondary'>Go Back</a>
      </Link>
      <h1 style={{ marginTop: '2rem', fontSize: '2.5rem', color: 'red' }}>
        Search Results for {router.query.term}
      </h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
};
export default SearchPage;
export const getServerSideProps: GetServerSideProps = async ({ query: { term } }) => {
  // using qs module for multiple queries
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { speakers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
};
