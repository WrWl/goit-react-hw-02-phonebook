import PropTypes from 'prop-types';
import { Button } from './AddContact.styled';

const AddContact = ({ type = 'submit', children }) => {
  return <Button type={type}>{children}</Button>;
};

AddContact.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AddContact;
