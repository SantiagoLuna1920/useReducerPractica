import React from 'react'
import { contacts } from '../helpers/helpersStatesReducers'

const ContactList = ({contacts, dispatch, selectedId}) => {
  return (<section className="contact-list">
    <ul>
        {
            contacts.map((contact) => (
                <li key={contact.id}>
          <button style={contact.id === selectedId ? {borderColor: 'white'} : {borderColor: '#242424'}} onClick={() => {
            
            dispatch({
                type: 'changed_selection',
                id: contact.id,
            })
          }}>
            { contact.id === selectedId ? <b>{contact.name}</b>: contact.name }
          </button>
        </li>
            ))
        }
    </ul>
  </section>)
}

export default ContactList