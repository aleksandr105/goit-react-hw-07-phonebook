import styled from '@emotion/styled';

export const ButtonDelete = styled.button`
  margin-left: 10px;
  padding: 2px;
  background-color: ${p => (p.disabled ? 'transparent' : '#50ceff')};
  border-radius: 5px;
  border: none;
  width: 50px;
  font-weight: 600;
  transition-duration: 130ms;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: red;
    transform: scale(1.1);
  }
`;

export const Item = styled.li`
  color: tomato;
  display: flex;
  font-weight: 600;
`;

export const ItemText = styled.span`
  color: black;
  font-weight: 600;
  margin-left: 3px;
`;

export const Number = styled.a`
  margin-left: auto;
  color: blue;
  text-decoration: none;
  transition-duration: 130ms;
  :hover {
    transform: scale(1.08);
    color: tomato;
  }
`;
