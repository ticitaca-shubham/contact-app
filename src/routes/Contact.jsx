import React from 'react';
import { Link, useParams} from 'react-router-dom';


export default function Contact({ contacts, deleteContact }) {
    const { contactId } = useParams()
    function handleEdit(e){
        e.preventDefault();
        console.log('Edit button has been clicked.')
    }
    //defining a place holder for contact
    const contact = contacts.find(element => element.id === contactId) || contacts[0]
    return(
       <div id="contact-card">
            <img src={contact.url} alt='kitten-image' />
            <div className='contact-card-text'>
                <h1>{`${contact.fName} ${contact.lName}`}</h1>
                <Link to={`https://twitter.com/${contact.twitterId}`}>{contact.twitterId}</Link>
                <p>{contact.notes}</p>
                <div className='contact-cta'>
                    <Link id='x' to={`/contact/${contactId}/edit`}>Edit</Link>
                    <button id='y' onClick={() => deleteContact(contactId)}>Delete</button>  
                </div>
            </div>
        </div> 
    )
}