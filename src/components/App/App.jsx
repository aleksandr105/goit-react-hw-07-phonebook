import {
  Container,
  TitleLIstContacts,
  Titel,
  NoContactMessage,
} from './App.styled';
import { ContactForm } from '../ContatctForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { writeFilter } from '../../redux/filterSlice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const { data } = useGetContactsQuery();
  const [addcontact] = useAddContactMutation();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contactСheck = data.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (!contactСheck) {
      const contact = {
        name: name,
        phone: number.match(/\d{3}(?=\d{2,3})|\d+/g).join('-'),
      };

      addcontact(contact);
      resetForm();
    } else {
      alert(`${name} is alreadi in contacts`);
    }
  };

  const changeFilter = e => {
    dispatch(writeFilter(e.target.value));
  };

  return (
    <section>
      <Container>
        <Titel>Phonebook</Titel>
        <ContactForm handleSubmit={handleSubmit} />
        <TitleLIstContacts>Contacts</TitleLIstContacts>

        {data?.length > 0 ? (
          <>
            <Filter changeFilter={changeFilter} />
            <ContactList />
          </>
        ) : (
          <NoContactMessage>No contact yet</NoContactMessage>
        )}
      </Container>
    </section>
  );
};
