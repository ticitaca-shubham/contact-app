import React from 'react';
import {Outlet, NavLink, Form, useLoaderData, redirect} from 'react-router-dom';
import SidebarNav from './SidebarNav';

const ContactContext = React.createContext();

export default function Root({ contacts, createNewContact, someContactFunction}) {

    return(
        <>
            {
                contacts.length > 0 
                ?
                <div className='main-content'>
                    <div id='sidebar'>
                        <div className='form-container'>
                            <form id='search-form'>
                                <input 
                                    id='q'
                                    aria-label='Search contacts'
                                    placeholder='Search'
                                    type='search'
                                    name='q'
                                />
                                <div 
                                    id='search-spinner'
                                    aria-hidden
                                    hidden={true}
                                ></div>
                                <div
                                    className='sr-only'
                                    aria-live='polite'
                                ></div>        
                            </form>
                            <form method='post'>
                                <button  
                                    id='p' 
                                    type='submit'
                                    onClick={createNewContact}
                                >New</button>
                            </form>
                        </div>
                        <h1>Contact App</h1>
                        <nav>
                            <ul id='nav-link'>
                                <SidebarNav
                                    contacts={contacts}
                                    someContactFunction={someContactFunction}
                                />
                            </ul>
                        </nav>
                    </div>
                    <div id="detail">
                        <Outlet />
                    </div>
                </div>
                :
                <div className="no-contact">
                    <h1>You have no contacts</h1>
                    <button 
                        className="first-contact" 
                        onClick={createNewContact}
                    >
                        Create one now
                    </button>
          </div>
            }
        </>
    )
}
