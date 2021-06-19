import Layout from '../../components/Layout';
import { GetServerSideProps } from 'next';
import { API_URL } from '../../config';
import { event } from '../../config/types';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import EventMap from '../../components/EventMap';
import { useCallback, useEffect, useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import Geocode from 'react-geocode';

function Event({ evt }: { evt: event }) {
  const [lat, setLat] = useState<number>(null);
  const [lng, setLng] = useState<number>(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: '100%',
    height: '400px',
    zoom: 12,
  });
  const fetchData = useCallback(() => {
    // Get latitude & longitude from address.
    const fetchMap = async () => {
      const resData =
        await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${evt.address}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      `);
      const res = await resData.json();
      setLng(res.features[0].center[0]);
      setLat(res.features[0].center[1]);
      setViewport({
        ...viewport,
        longitude: res.features[0].center[0],
        latitude: res.features[0].center[1],
      });
      setLoading(false);
    };
    fetchMap();
  }, [evt.address]);

  useEffect(() => {
    fetchData();
  }, [evt.address]);

  if (loading) return false;
  return (
    <Layout
      title={evt.name}
      description={evt.description.slice(0, 200)}
      keywords='event manager'
    >
      <EventContainer>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className='image'>
            <Image
              src={
                evt.image.formats.medium
                  ? evt.image.formats.medium.url
                  : evt.image.formats.thumbnail.url
              }
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}

        <h3>Organizers:</h3>
        <p>{evt.speakers}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
        <h3>Meeting Link:</h3>
        <a href={evt.link} target='_blank'>
          <p>Join the event</p>
        </a>
        <h3>Description:</h3>
        <p>{evt.description}</p>

        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          onViewportChange={(vp) => setViewport(vp)} // move map
        >
          <Marker key={evt.id} latitude={lat} longitude={lng}>
            <Image src='/images/pin.svg' width={30} height={30} />
          </Marker>
        </ReactMapGl>

        <div>
          <Link href='/events'>
            <a className='btn  '>Go Back</a>
          </Link>
        </div>
      </EventContainer>
    </Layout>
  );
}

export default Event;

export const getServerSideProps: GetServerSideProps = async ({ query: { slug } }) => {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return { props: { evt: events[0] } };
};
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true, // true : make a new request if slug not found in static
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }
const EventContainer = styled.div`
  position: relative;
  padding-top: 40px;
  span {
    font-weight: 500;
    font-size: 1.2rem;
  }
  h3 {
    font-size: 25px;
  }
  h1 {
    font-size: 3rem;
  }

  p {
    margin: 10px 0;
  }

  .image {
    margin-bottom: 20px;
    width: 100%;
    position: relative;
    height: 60vh;
  }

  .controls {
    position: absolute;
    right: 30px;
    top: 0;
  }

  .delete {
    margin-left: 20px;
    color: red;
  }

  .back {
    display: block;
    margin-top: 40px;
  }
`;
