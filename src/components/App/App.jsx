import {
  Container,
  TitleLIstContacts,
  Titel,
  NoContactMessage,
} from './App.styled';
import { useEffect } from 'react';
import { ContactForm } from '../ContatctForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { writeFilter } from '../../redux/filterSlice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  const { data } = useGetContactsQuery();
  const [addcontact, { isLoading, isSuccess }] = useAddContactMutation();

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
      toast.error(`${name} is alreadi in contacts`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const changeFilter = e => {
    dispatch(writeFilter(e.target.value));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact successfully added', {
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

  return (
    <section>
      <Container>
        <ToastContainer />
        <Titel>Phonebook</Titel>
        <ContactForm handleSubmit={handleSubmit} isLoading={isLoading} />
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
