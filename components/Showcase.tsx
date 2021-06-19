import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Search from './Search';
import media from 'css-in-js-media';

export default function Showcase() {
  return (
    <ShowcaseContainer>
      <div className='hero'>
        <Search />

        <h1>Create events and inspire!</h1>
        <h2>
          Connect and meet new friends, organize events and <br></br>join online events in
          any domain ...
        </h2>
      </div>
    </ShowcaseContainer>
  );
}

const ShowcaseContainer = styled.div`
  height: 80vh;
  width: 100%;
  background: url('/images/hero-img.jpg') no-repeat center center;
  background-position: center center;
  background-size: cover;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(135, 255, 135, 0.6);
  }

  .showcase * {
    z-index: 100;
  }

  h1 {
    font-size: 9rem;
    margin-bottom: 0;
    ${media('<=desktop')} {
      font-size: 4vw;
    }
  }
  h1,
  h2 {
    padding: 1rem;
    color: var(--black);
  }

  .hero {
    max-width: 50%;
    z-index: 100;
    margin-left: 10%;
    ${media('<=desktop')} {
      max-width: 100%;
    }
  }
`;
