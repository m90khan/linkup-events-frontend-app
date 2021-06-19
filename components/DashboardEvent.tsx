import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export default function DashboardEvent({ evt, handleDelete }) {
  return (
    <Event>
      <Link href={`/events/${evt.slug}`}>
        <h4>{evt.name}</h4>
      </Link>
      <Link href={`/events/edit/${evt.id}`}>
        <a className='btn'>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <a href='#' className='btn btn-secondary' onClick={() => handleDelete(evt.id)}>
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
  background-color: #fffefe;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h4 {
    margin-bottom: 10px;
    color: black;
    font-size: 1.8rem;
    flex: 2;
  }

  .edit,
  .delete {
    margin: 10px;
  }
`;
