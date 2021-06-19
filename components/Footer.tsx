import Link from 'next/link';
import styled from 'styled-components';
import Header from './Header';
import Image from 'next/image';

export default function Footer() {
  return (
    <FooterContainer>
      <Link href='/'>
        <div className='logo'>
          <Image src={'/images/logo-light.png'} width={50} height={40} />
          <h2>LINKUP</h2>
        </div>
      </Link>
      <nav className='nav'>
        <li>
          <Link href='/events'>
            <a>Events</a>
          </Link>
        </li>

        <li>
          <Link href='/events/add'>
            <a>Add Event</a>
          </Link>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <Link href='/account/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
      </nav>
      <p>Copyright &copy; LinkUp | {new Date().getFullYear()}</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  text-align: center;
  background: var(--black);
  color: white !important;
  padding: 4rem 0;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 4rem 0;
    li {
      padding-right: 1rem;
      a {
        color: var(--white);
      }
    }
  }
  p {
    color: white;
    font-size: 1.4rem;
  }
`;
