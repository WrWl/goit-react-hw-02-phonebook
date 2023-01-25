import styled from 'styled-components';
import { ErrorMessage as ErrorFormicError, Field } from 'formik';

export const ErrorMessage = styled(ErrorFormicError)`
  color: ${p => p.theme.colors.error};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Input = styled(Field)`
  width: 200px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  border-radius: ${p => p.theme.radii.normal};

  :focus {
    border: 1px solid #337ab7;
    outline: none;
  }
`;

export const Wraper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: black;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :focus-within {
    color: #337ab7;
  }
`;

export const LabelName = styled.span`
  color: black;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
