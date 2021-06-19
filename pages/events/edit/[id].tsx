import moment from 'moment';
import { FaImage } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { API_URL } from '../../../config';
import Layout from '../../../components/Layout';
import { Form } from '../../../styles/styles';
import Modal from '../../../components/Modal';
import ImageUpload from '../../../components/ImageUpload';
import { parseCookies } from '../../../config/helper';
import { GetServerSideProps } from 'next';
import { AddValues, event } from './../../../config/types';
interface ImagePreview {
  image: {
    formats?: {
      thumbnail?: {
        url?: string | null;
      };
    };
  };
}
export default function EditEventPage({ evt, token }: { evt: event; token: string }) {
  const [values, setValues] = useState<AddValues>({
    name: evt.name,
    speakers: evt.speakers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    link: evt.link,
    description: evt.description,
  });
  const [imagePreview, setImagePreview] = useState(
    evt.image ? evt.image.formats.thumbnail.url : null
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some((element) => element === '');

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }
    try {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error('Unauthorized');
          return;
        }
        toast.error('Something Went Wrong');
      } else {
        const evt = await res.json();
        router.push(`/events/${evt.slug}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/events/${evt.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  return (
    <Layout title='Add New Event'>
      <Link href='/events'>
        <a className='btn'>Go Back</a>
      </Link>
      <h1>Edit Event</h1>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <div className='grid'>
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='speakers'>Speakers</label>
            <input
              type='text'
              name='speakers'
              id='speakers'
              value={values.speakers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='venue'>Venue</label>
            <input
              type='text'
              name='venue'
              id='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              value={moment(values.date).format('yyyy-MM-DD')}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='time'>Time</label>
            <input
              type='text'
              name='time'
              id='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>Event Description</label>
          <textarea
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          />
        </div>

        <input
          type='submit'
          value='Update Event'
          className='btn btn-large'
          style={{ fontWeight: 700 }}
        />
      </Form>

      <h2>Event Image</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={200} width={500} />
      ) : (
        <div>
          <p>No image uploaded</p>
        </div>
      )}

      <div>
        <button onClick={() => setShowModal(true)} className='btn btn-icon'>
          <FaImage /> Set Image
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} title={evt.name}>
        <ImageUpload evtId={evt.id} imageUploaded={imageUploaded} token={token} />
      </Modal>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params: { id }, req }) => {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/${id}`);
  const evt: event = await res.json();

  return {
    props: {
      evt,
      token,
    },
  };
};
