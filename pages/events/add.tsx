import Layout from '../../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '../../config';

import { parseCookies } from '../../config/helper';
import { Form } from '../../styles/styles';
import { NextPage, GetServerSideProps } from 'next';
import { AddValues } from './../../config/types';
export default function AddEventPage({ token }) {
  const [values, setValues] = useState<AddValues>({
    name: '',
    speakers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
    link: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some((element) => element === '');

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('No token included');
        return;
      }
      toast.error('Something Went Wrong');
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title='Add New Event' keywords='event manager'>
      <Link href='/events'>
        <p className='btn'>Go Back</p>
      </Link>
      <h1>Add Event</h1>
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
              value={values.date}
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
          <div style={{ padding: '2rem 0' }}>
            <label htmlFor='link'>Meeting Link</label>
            <input
              type='text'
              name='link'
              id='link'
              value={values.link}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor='description'>Event Description</label>
          <textarea
            name='description'
            id='description'
            rows={10}
            value={values.description}
            onChange={handleInputChange}
          />
          <p>Note: Address should include zip code</p>
        </div>

        <input type='submit' value='Add Event' className='btn btn-large' />
      </Form>
    </Layout>
  );
}

export const getServerSideProps = ({ req }) => {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
};
