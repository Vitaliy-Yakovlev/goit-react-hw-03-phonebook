import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
