import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

 
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
 
html {
  --green: #87FF87;
  --yellow:   #FFED7C;
    --black: #101010;
    --grey: #272727;
    --white: #fff;
     --lightGrey: #e1e1e1;
     --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  font-size: 62.5%;  
 
  
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: green;
  }

  &::-webkit-scrollbar-track {
    background: black;
  }
 }
body{
      overflow-x: hidden; 
     -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
   line-height: 1.5;
   font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: steelblue;  
}
li ,p, a{
font-size: 1.6rem;
}

ul,
li {
  margin: 0;
  padding: 0;
}
 li{
   list-style: none;
 }

p {
  margin: 1rem 0;
}

h1 {
  margin-bottom: 2rem;
}
::selection {
  background-color:var(--green) ;
  color: white;
}
.btn {
  display: inline-block;
  background: var(--green);
  color: var(--black);
  padding: 1rem 2rem;
  cursor: pointer;
  border: 0;
  border-radius: .5rem;
  font-weight: 600;
}
.btn-large{
  padding: 1rem 4rem;
  font-size: 2.5rem;
}
.btn:hover {
  opacity: 0.9;
}

.btn-secondary {
   background: #000;
  color: #fff !important;
  border: 0;
  border-radius: .5rem;
  padding: 1rem 2rem;
  margin: 0 2rem;
  cursor: pointer;
}

.btn-secondary:hover {
  opacity: 0.8;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon svg {
  margin-right: .5rem;
}
 
`;

export default GlobalStyle;
