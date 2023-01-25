import styled from 'styled-components';

export const Button = styled.button`
  width: 110px;

  display: block;
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeight.bold};
  border-radius: ${p => p.theme.radii.normal};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.btnHover};
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.75);
    color: ${p => p.theme.colors.black};
  }
`;
