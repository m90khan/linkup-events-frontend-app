import styled, { css } from 'styled-components';
import media from 'css-in-js-media';

export const Title = styled.h1`
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  text-align: center;
  color: var(--black);
  font-size: 4rem;
`;

export const Form = styled.form`
  label {
    display: block;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 5px;
  }

  textarea {
    width: 100%;
    height: 150px;
  }

  input[type='submit'] {
    display: block;
    width: 100%;
    margin: 20px 0 30px;
  }

  .file {
    border: 1px #ccc solid;
    background-color: #f4f4f4;
    padding: 10px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 20px;
  }
  ${media('<=phone')} {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const AuthContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 30px;
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    display: block;
    width: 100%;
    height: 40px;
    padding: 5px;
    font-size: 18px;
  }
  input[type='submit'] {
    margin-top: 20px;
    width: 100%;
    font-size: 17px;
  }
  div {
    margin-bottom: 20px;
  }
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${(props: any) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props: any) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `};
  ${(props: any) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props: any) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props: any) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;
