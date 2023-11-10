import React from 'react';
import { nanoid } from 'nanoid';
import ErrorPage from './ErrorPage';
import Contact from './routes/Contact'
import Root from './routes/Root'
import Edit from './routes/Edit'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Outlet, useNavigate} from "react-router-dom";


export default function App() {
    const [contacts, setContacts] = React.useState([])
    const [currentContactId, setCurrentContactId] = React.useState('')
    const currentContact = contacts.find(contact => contact.id === currentContactId) || contacts[0]
    
    async function createNewContact(e){
        e.preventDefault();
        const newContact = {
            id: nanoid(),
            fName: "First",
            lName: "Last",
            twitterId: "@jack",
            url: "https://placekitten.com/g/200/200",
            notes: "Some Notes",
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        setContacts(prevContact => [newContact, ...prevContact])
    }
    
    function updateContact(formdata){
        setContacts(oldContacts => oldContacts.map(oldContact => {
            return oldContact.id === currentContactId
                ? {...oldContact, 
                    fName: formdata.firstName,
                    lName: formdata.lastName,
                    twitterId: formdata.twitter,
                    url: formdata.avatar,
                    notes: formdata.notes,
                    updatedAt: Date.now()
                    }
                : oldContact
        }))
        
    }
    
    function deleteContact(contactId){
        setContacts(oldContacts => oldContacts.filter(contact => contact.id !== contactId))
        
    }
    
    function someContactFunction(id){
        setCurrentContactId(id)
    }
    // console.log(currentContactId)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root 
                                    contacts={contacts}
                                    createNewContact={createNewContact}
                                    someContactFunction={someContactFunction} 
                                />}>
          <Route path='contact/:contactId' element={<Contact 
                                                        contacts={contacts}
                                                        deleteContact={deleteContact} 
                                                    />} />
          <Route path='contact/:contactId/edit' element={<Edit updateContact={updateContact} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
