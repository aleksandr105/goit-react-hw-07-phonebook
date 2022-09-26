import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormCreateContact = styled(Form)`
  border: 2px solid black;
  padding: 30px;
`;

export const InputMessage = styled(ErrorMessage)`
  font-weight: 600;
  padding-bottom: 10px;
  color: red;
`;

export const Inpup = styled(Field)`
  display: block;
  width: 70%;
  height: 25px;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 5px;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  display: block;
  color: blue;
`;

export const ButtonAdd = styled.button`
  padding: 8px;
  background-color: #50ceff;
  width: 110px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  transition-duration: 130ms;
  :hover {
    transform: scale(1.03);
    color: #fff;
  }
`;
