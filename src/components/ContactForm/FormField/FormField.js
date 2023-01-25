import { ErrorMessage, Wraper, LabelName, Input } from './FormField.styled';
import PropTypes from 'prop-types';

const FormField = ({ label, type, name }) => {
  return (
    <Wraper>
      {label && <LabelName>{label}</LabelName>}

      <Input type={type} name={name} placeholder={name} />
      <ErrorMessage component="span" name={name} />
    </Wraper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
