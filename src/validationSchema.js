import * as yup from 'yup';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The number should have digits only');
});

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(/^[aA-zZ\s]+$/, 'The name should have  only alphabets');
});

export const schema = yup.object().shape({
  name: yup.string().min('3').leters().required('Please enter your name!'),

  number: yup.string().min('3').numeric().required('Please enter your number!'),
});
