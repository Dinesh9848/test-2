import React, { useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', gender: 'Male', type: 'Business' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901', gender: 'Female', type: 'Personal' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '345-678-9012', gender: 'Male', type: 'Business' },
    { id: 4, name: 'Mary Jones', email: 'mary.jones@example.com', phone: '456-789-0123', gender: 'Female', type: 'Personal' },
  ]);
  const [editing, setEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState({ id: null, name: '', email: '', phone: '', gender: '', type: '' });
  const [counts, setCounts] = useState({ male: 0, female: 0, personal: 0, business: 0 });

  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
    updateCounts(contact);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    updateCounts(null, id);
  };

  const editContact = (contact) => {
    setEditing(true);
    setCurrentContact(contact);
  };

  const updateContact = (id, updatedContact) => {
    setEditing(false);
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)));
    updateCounts(updatedContact);
  };

  const updateCounts = (contact, idToDelete) => {
    let maleCount = counts.male;
    let femaleCount = counts.female;
    let personalCount = counts.personal;
    let businessCount = counts.business;

    if (contact) {
      if (contact.gender === 'Male') {
        maleCount++;
      } else if (contact.gender === 'Female') {
        femaleCount++;
      }

      if (contact.type === 'Personal') {
        personalCount++;
      } else if (contact.type === 'Business') {
        businessCount++;
      }
    }

    if (idToDelete) {
      const deletedContact = contacts.find((contact) => contact.id === idToDelete);

      if (deletedContact.gender === 'Male') {
        maleCount--;
      } else if (deletedContact.gender === 'Female') {
        femaleCount--;
      }

      if (deletedContact.type === 'Personal') {
        personalCount--;
      } else if (deletedContact.type === 'Business') {
        businessCount--;
      }
    }

    setCounts({ male: maleCount, female: femaleCount, personal: personalCount, business: businessCount });
  };

  return (
    <div className="container">
      <h1>Contact List</h1>
      <div className="row">
        <div className="col-8">
          <h2>Contacts</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
                </table>
                </div>
                </div>
                </div>
                
                )
                }