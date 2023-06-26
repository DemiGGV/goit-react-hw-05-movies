import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormInput,
  SearchHead,
} from 'styling/MainContainerCSS';

export const Searchbar = ({ value, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <SearchHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          autoFocus="true"
          type="text"
          name="query"
          value={value}
          onChange={evt => onChange(evt.target.value)}
        />
      </SearchForm>
    </SearchHead>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
