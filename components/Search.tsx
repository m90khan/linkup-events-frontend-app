import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
const SearchBox = styled.div`
  input {
    width: 30rem;
    height: 4rem;
    padding: 2rem;
    border: 1px #777 solid;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }
`;

const Search = () => {
  const [term, setTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };

  return (
    <SearchBox>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search an event near you ...'
        />
      </form>
    </SearchBox>
  );
};
export default Search;
