import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
// import styles from '@/styles/Modal.module.css'

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ModalContainer>
      <div className='modal'>
        <div className='header'>
          <a href='#' onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className='body'>{children}</div>
      </div>
    </ModalContainer>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
}
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  .modal {
    background: white;
    width: 500px;
    height: 600px;
    border-radius: 15px;
    padding: 20px;
    z-index: 100;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
  }

  .body {
    padding-top: 10px;
  }
`;
// https://devrecipes.net/modal-component-with-next-js/
