import { List } from './ContactList.styled';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);

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
      {visibalFiltr
        .sort((firstName, secondName) =>
          firstName.name.localeCompare(secondName.name)
        )
        .map(({ id, name, phone }, index) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            index={index}
          />
        ))}
    </List>
  );
};
