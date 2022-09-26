import {
  List,
  ButtonDelete,
  Item,
  ItemText,
  Number,
} from './ContactList.styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data } = useGetContactsQuery();

  const showFiltered = () => {
    if (!data) {
      return;
    }
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibalFiltr = showFiltered();

  return (
    <List>
      {visibalFiltr.map(({ id, name, phone }, index) => {
        const arrPhone = phone.replaceAll('-', '');

        return (
          <Item key={id}>
            {index + 1}.<ItemText>{name}:</ItemText>
            <Number href={`tel:${arrPhone}`}>{phone}</Number>
            <ButtonDelete
              type="button"
              disabled={isLoading === id}
              onClick={() => deleteContact(id)}
            >
              Delete
            </ButtonDelete>
          </Item>
        );
      })}
    </List>
  );
};
