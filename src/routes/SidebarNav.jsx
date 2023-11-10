import React from 'react';
import { NavLink } from "react-router-dom";

export default function SidebarNav({contacts, someContactFunction}){
    const sideBarNav = contacts.map((contact) => {
        return(
            <li key={contact.id}>
                <NavLink 
                    to={`/contact/${contact.id}`}
                    onClick={() => someContactFunction(contact.id)}
                >{contact.fName} {contact.lName}</NavLink>
            </li>
        )
    })
    return(
        <>
            {sideBarNav}
        </>
    )
}