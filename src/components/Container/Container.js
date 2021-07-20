import React from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => (
  <>
    <h1 className={s.title}>React. Home Work - Phonebook</h1>
    <div className={s.container}>{children}</div>
  </>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
