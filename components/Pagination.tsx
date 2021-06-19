import Link from 'next/link';
import { PER_PAGE } from '../config';

export default function Pagination({ page, total }: { page: number; total: number }) {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className='btn btn-large '>Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className='btn btn-large'>Next</a>
        </Link>
      )}
    </>
  );
}
