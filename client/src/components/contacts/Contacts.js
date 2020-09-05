import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext); //Access to any state associated with contacts

  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
