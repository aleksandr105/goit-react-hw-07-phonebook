import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item, ItemText, Number, ButtonDelete } from './ContactItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from 'react-spinners/HashLoader';

export const ContactItem = ({ id, name, phone, index }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.info(`contact deleted successfully`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isSuccess]);

  const arrPhone = phone.replaceAll('-', '');

  return (
    <Item key={id}>
      {index + 1}.<ItemText>{name}:</ItemText>
      <Number href={`tel:${arrPhone}`}>{phone}</Number>
      <ButtonDelete
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        <HashLoader loading={isLoading} color={'red'} size={15} />
        {!isLoading ? 'Delete' : ''}
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
