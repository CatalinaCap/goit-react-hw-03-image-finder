import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ onClick }) {
  return (
    <button className={styles.Button} onClick={onClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
