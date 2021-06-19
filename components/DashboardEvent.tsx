import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export default function DashboardEvent({ evt, handleDelete }) {
  return (
    <Event>
      <h4>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${evt.id}`}>
        <a className='edit'>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <a href='#' className='delete' onClick={() => handleDelete(evt.id)}>
        <FaTimes /> <span>Delete</span>
      </a>
    </Event>
  );
}

const Event = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px #ddd solid;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h4 {
    margin-bottom: 10px;
    flex: 2;
  }

  .edit,
  .delete {
    margin: 10px;
  }

  .delete {
    color: red;
  }
`;
