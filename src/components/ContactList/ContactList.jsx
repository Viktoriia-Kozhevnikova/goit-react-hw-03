// import React from 'react'
import s from '../ContactList/ContactList.module.css'
import Contact from '/src/components/Contact/Contact.jsx'

const ContactList = ({contacts, handleDeleteContact}) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
          />
          <button onClick={() => handleDeleteContact(contact.id)} className={s.btn}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList;