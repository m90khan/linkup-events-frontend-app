import { createContext, useState, useEffect, SetStateAction, Dispatch } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '../config';
// interface User{
//   username?: string,
//   email: string
//   password: string
// }

interface AppContextInterface {
  user: any;
  setUser?: Dispatch<SetStateAction<any>>;
  error: any | Error;
  setError?: Dispatch<SetStateAction<any | Error>>;
  register: (user) => Promise<void>;
  login: ({ email: any, password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkUserLoggedIn?: () => Promise<void>;
}
export const AuthContext = createContext<AppContextInterface | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register user
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  };
  // Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Logout user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch(`${NEXT_URL}/api/user`);
      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.log('not logged in');
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ user, error, register, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
