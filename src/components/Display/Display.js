import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Display = ({
  total, completed, formatted, setTime,
}) => {
  // Set the time here, so if we pause can resume where we were
  useEffect(() => {
    setTime(total);
  }, [total]);
  const { minutes = '', seconds = '' } = formatted;
  if (completed) {
    // Render a completed state
    return <div>You&apos;re done</div>;
  }
  // Render a countdown
  return (
    <span className="time">
      {minutes}
      :
      {seconds}
    </span>
  );
};

Display.displayName = 'Display';

Display.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  formatted: PropTypes.shape({
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  }).isRequired,
  setTime: PropTypes.func.isRequired,
};

export default Display;
