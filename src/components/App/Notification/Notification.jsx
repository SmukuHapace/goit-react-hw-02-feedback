import PropTypes from 'prop-types';
import './Notification.css';

export const Notification = ({ message }) => {
  return <p className="mess">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
