import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import media from 'css-in-js-media';
import Image from 'next/image';

export default function Features() {
  return (
    <FeaturesContainer>
      <h1>How it works</h1>
      <div className='features'>
        <div className='feature'>
          <Image src={'/images/work-1.png'} layout='fixed' width={200} height={160} />

          <div className='feature-content'>
            <h4 className='secondary-heading'>Create an Account </h4>
            <p className='desc-text'>Create an account to get started.</p>
          </div>
        </div>
        <div className='feature'>
          <Image src={'/images/work-2.png'} layout='fixed' width={200} height={160} />

          <div className='feature-content'>
            <h4 className='secondary-heading'>Add Event</h4>
            <p className='desc-text'>Add details about your event</p>
          </div>
        </div>
        <div className='feature'>
          <Image src={'/images/work-3.png'} layout='fixed' width={200} height={160} />

          <div className='feature-content'>
            <h4 className='secondary-heading'>Present</h4>
            <p className='desc-text'>Users will join your event</p>
          </div>
        </div>
      </div>
    </FeaturesContainer>
  );
}

const FeaturesContainer = styled.div`
  min-height: 40vh;
  position: relative;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
  .features {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;

    & > *:not(last-child) {
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
    }
    flex-wrap: wrap;
  }

  .feature {
    flex: 1 1 25rem;
    position: relative;
    ${media('<=desktop')} {
      flex: 1 1 35rem;
    }

    padding: 5rem 1.5rem;
    background: var(--white);

    border-radius: 1rem;
    height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 4rem;
      height: auto;
      object-fit: cover;
      ${media('<=desktop')} {
        width: 30%;
      }
    }
    &-content {
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;
