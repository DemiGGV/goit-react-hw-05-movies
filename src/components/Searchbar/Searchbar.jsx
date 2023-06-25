import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchHead,
} from 'styling/MainContainerCSS';

export const Searchbar = () => {
  const [, setSearchParams] = useSearchParams();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ q: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <SearchHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput type="text" name="query" />
        <SearchFormButton type="submit"></SearchFormButton>
      </SearchForm>
    </SearchHead>
  );
};

export default Searchbar;
