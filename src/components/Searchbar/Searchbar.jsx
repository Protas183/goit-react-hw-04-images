import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Header, SearchForm, Input, ButtonSubmit } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchQueryChange = useCallback((e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (query.trim() === '') {
        toast.error('Please enter a search value');
        return;
      }

      onSubmit(query);
    },
    [query, onSubmit]
  );

  return (
    <Header className="searchbar">
      <SearchForm onSubmit={handleSubmit} className="form">
        <Input
          onChange={handleSearchQueryChange}
          value={query}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <ButtonSubmit type="submit" className="button">
          Search
        </ButtonSubmit>
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


