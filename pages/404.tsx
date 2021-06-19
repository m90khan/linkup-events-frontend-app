import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { NextPage } from 'next';

// 404  = auto 404 page
const NotFoundPage: NextPage = () => {
  return (
    <Layout title='Page Not Found'>
      <Error>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, We could not find anyrhing</h4>
        <Link href='/'>Go Back Home</Link>
      </Error>
    </Layout>
  );
};

const Error = styled.div`
  text-align: center;
  margin: 10rem 0 20rem;

  h1 {
    font-size: 5rem;
  }
  h4 {
    font-size: 3rem;
  }
`;
export default NotFoundPage;
