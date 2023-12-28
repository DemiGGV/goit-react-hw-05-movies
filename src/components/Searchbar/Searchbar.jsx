import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormInput,
  SearchFormYearInput,
  SearchHead,
} from 'styling/MainContainerCSS';

export const Searchbar = ({ value, value1, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <SearchHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          placeholder="Input name..."
          autoFocus="true"
          type="text"
          name="query"
          value={value}
          onChange={evt => onChange('query', evt.target.value)}
        />
        <SearchFormYearInput
          placeholder="Input Release date..."
          type="number"
          min="1980"
          max="2023"
          step="1"
          name="year"
          value={value1}
          onChange={evt => onChange('year', evt.target.value)}
        />
      </SearchForm>
    </SearchHead>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
