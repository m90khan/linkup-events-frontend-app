import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import media from 'css-in-js-media';
import { event } from '../config/types';
import { ReactElement } from 'react';

interface Props {
  event: event;
}
const EventItem = ({ evt }: { evt: event }): ReactElement => {
  return (
    <Item>
      <Link href={`/events/${evt.slug}`}>
        <div className='img'>
          <Image
            src={
              evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'
            }
            layout='responsive'
            width={120}
            height={80}
          />
        </div>
      </Link>

      <div className='info'>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <Link href={`/events/${evt.slug}`}>
          <h3>{evt.name}</h3>
        </Link>

        <p>{evt.description.slice(0, 200)}...</p>
      </div>

      <div>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 13px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

  .img {
    flex: 1;
    margin: 10px;
    position: relative;
  }

  .info {
    flex: 3;
    padding: 0 2rem;
    span {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
  ${media('<=phone')} {
    .event {
      flex-direction: column;
      text-align: center;
    }
    .info {
      margin-bottom: 20px;
    }
  }
`;

export default EventItem;
