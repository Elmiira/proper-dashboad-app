import React from 'react';
import propTypes from 'prop-types';

import config from 'config';

const LoadingIndicator = props => {
  const { show, position, size, color } = props;
  return (
    <div
      className={`loading-container ${show ? 'd-block' : 'd-none'}`}
      style={{ position }}
    >
    </div>
  );
};

export default LoadingIndicator;

LoadingIndicator.propTypes = {
  show: propTypes.bool,
  position: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
};

LoadingIndicator.defaultProps = {
  size: 40,
  color: 'primary',
};
