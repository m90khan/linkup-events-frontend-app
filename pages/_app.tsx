// import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './../styles/GlobalStyles';
import { setBreakPoints } from 'css-in-js-media';
import { AuthProvider } from './../context/AuthContext';

setBreakPoints({ phone: 600 });
const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
