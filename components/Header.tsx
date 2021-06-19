import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import Link from 'next/link';
import Search from './Search';
import styled from 'styled-components';
import media from 'css-in-js-media';
import AuthContext from '../context/AuthContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flex } from '../styles/styles';
import { useRouter } from 'next/router';
export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0, repeatCount: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.2,
      }}
    >
      <div className='header-inner'>
        <Link href='/'>
          <div className='logo'>
            <Image src={'/images/logo.png'} width={50} height={40} />
            <h2>LINKUP</h2>
          </div>
        </Link>
        <nav className='nav' style={!user && { justifyContent: 'flex-end' }}>
          {router.pathname != '/' && <Search />}
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          {user && (
            <>
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
            </>
          )}
        </nav>
        <div>
          {user ? (
            <a onClick={() => logout()} className=' btn contact'>
              Logout
            </a>
          ) : (
            <Flex>
              <Link href='/account/login'>
                <a className='btn btn-secondary contact'>Login</a>
              </Link>
              <Link href='/account/register'>
                <a className='btn  contact'>Sign up</a>
              </Link>
            </Flex>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(motion.div)`
  font-size: 1.8rem;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  ${media('<=tablet')} {
    padding: 0 12px;
    min-height: auto;
    font-size: 1.2rem;
    padding: 1rem;
  }
  .header-inner {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${media('<=tablet')} {
      flex-wrap: wrap;
      width: 95%;
    }
    .logo {
      font-weight: 700;
      display: flex;
      h2 {
        font-size: 3rem;
      }
      cursor: pointer;
      color: var(--green);
      ${media('<=tablet')} {
        font-size: 2.8rem;
        justify-content: center;
        flex: 0 0 100%;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      /* position: absolute; */
      /* left: 50%;
      transform: translateX(-50%); */
      flex: 1;
      margin-right: auto;
      padding: 0 4rem;
      flex-wrap: wrap;
      ${media('<=tablet')} {
        padding: 1rem 1rem;
        flex: 0 0 100%;
        justify-content: center !important;
      }
      li {
        list-style: none;
        margin: 0 1rem;
        a {
          text-decoration: none;
          color: black;
          white-space: nowrap;
          font-size: 1.8rem;
        }
      }
    }
    .contact {
      cursor: pointer;
      ${media('<=tablet')} {
        flex: 0 0 100%;
      }
      color: black;
      a {
        color: black;
        text-decoration: none;
        border-bottom: 2px solid $black;
        padding-bottom: 12px;
        white-space: nowrap;
        ${media('<=phone')} {
          border: none;
        }
      }
    }
  }
`;

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fff;
//   color: #333;
//   height: 60px;
//   padding: 0 30px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   ${media('<=tablet')} {
//     flex-direction: column;
//     height: auto;
//     ul {
//       margin: 20px 0;
//       flex-direction: column;
//       text-align: center;
//     }
//     a {
//       margin-right: 0;
//     }
//     .logo {
//       margin: 20px 0;
//     }
//   }
//   a {
//     color: #333;
//     margin-right: 20px;
//     &:hover {
//       color: #000;
//     }
//   }

//   ul {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     list-style: none;
//     a {
//       font-size: 1.4rem;
//     }
//   }

//   .logo {
//     color: red;
//     text-transform: uppercase;
//     a {
//       font-size: 2.5rem;
//       color: red;
//     }
//   }
// `;
