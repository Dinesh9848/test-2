import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaMale, FaFemale, FaUser, FaBriefcase } from 'react-icons/fa';

const CONTACTS = [  {    id: 1,    firstName: 'John',    lastName: 'Doe',    email: 'john.doe@example.com',    phone: '123-456-7890',    gender: 'Male',    type: 'Business'  },  {    id: 2,    firstName: 'Jane',    lastName: 'Doe',    email: 'jane.doe@example.com',    phone: '234-567-8901',    gender: 'Female',    type: 'Personal'  },  {    id: 3,    firstName: 'Bob',    lastName: 'Smith',    email: 'bob.smith@example.com',    phone: '345-678-9012',    gender: 'Male',    type: 'Personal'  }];

function ContactList() {
  const [contacts, setContacts] = useState(CONTACTS);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [personalCount, setPersonalCount] = useState(0);
  const [businessCount, setBusinessCount] = useState(0);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    updateCounts(contact);
  };

  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === updatedContact.id) {
        return updatedContact;
      } else {
        return contact;
      }
    });
    setContacts(updatedContacts);
    updateCounts(updatedContact);
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
    const deletedContact = contacts.find((contact) => contact.id === contactId);
    updateCounts(deletedContact, true);
  };

  const updateCounts = (contact, isDelete = false) => {
    if (contact.gender === 'Male') {
      isDelete ? setMaleCount(maleCount - 1) : setMaleCount(maleCount + 1);
    } else if (contact.gender === 'Female') {
      isDelete ? setFemaleCount(femaleCount - 1) : setFemaleCount(femaleCount + 1);
    }
    if (contact.type === 'Personal') {
      isDelete ? setPersonalCount(personalCount - 1) : setPersonalCount(personalCount + 1);
    } else if (contact.type === 'Business') {
      isDelete ? setBusinessCount(businessCount - 1) : setBusinessCount(businessCount + 1);
    }
  };

  return (
    <div>
    {ContactList.map((value,index) => <div key={index}><h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button> </h5></div> )}
    </div>
  )
  
}

export default ToDoList