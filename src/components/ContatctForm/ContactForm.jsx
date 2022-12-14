import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Label,
  ButtonAdd,
  FormCreateContact,
  Inpup,
  InputMessage,
} from './ContactForm.styled';
import HashLoader from 'react-spinners/HashLoader';
import * as yup from 'yup';

let initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().min(2).max(25).required('Mandatory field'),
  number: yup
    .number()
    .positive()
    .integer()
    .lessThan(9999999999999)
    .required('Mandatory field'),
});

export const ContactForm = ({ handleSubmit, isLoading }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormCreateContact name="phonebook" autoComplete="off">
        <Label htmlFor="">
          Name
          <Inpup placeholder="Rosie Simpson" type="text" name="name" />
          <InputMessage name="name" component="p" />
        </Label>
        <Label htmlFor="">
          Number
          <Inpup placeholder="459-12-56" type="tel" name="number" />
          <InputMessage name="number" component="p" />
        </Label>
        <ButtonAdd type="submit" disabled={isLoading}>
          <HashLoader loading={isLoading} color={'red'} size={11} />
          {isLoading ? '' : 'Add contact'}
        </ButtonAdd>
      </FormCreateContact>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
