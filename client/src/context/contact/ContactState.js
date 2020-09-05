import React, { useReducer } from 'react';
import { v4 as uuid, v4 } from 'uuid'; //NPM for generating unique id's
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Katya',
        email: 'Katya@gmail.com',
        phone: '0520520522',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Yulia',
        email: 'Yulia@gmail.com',
        phone: '0520520523',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Olia',
        email: 'Olia@gmail.com',
        phone: '0520520524',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //    Add Contact

  const addContact = (contact) => {
    contact.id = v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };
  //    Delete Contact

  //    Set Current Contact

  //    Clear Current Contact

  //    Update Contact

  //    Filter Contacts

  //    Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
