import { Input, InputText } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <InputText>Find contact by name</InputText>
      <Input value={value} onChange={onChange}></Input>
    </label>
  );
};

export default Filter;
