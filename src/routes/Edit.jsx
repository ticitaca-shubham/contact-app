import React from 'react';
import { useNavigate, redirect, useParams} from "react-router-dom";

export default function Edit(props){
    const navigate = useNavigate();
    const { contactId } = useParams();
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        twitter: '',
        avatar: '',
        notes:'',
    })
    
    function handleChange(e){
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }
    
    function handleSubmit(e){
        props.updateContact(formData);
        navigate(`/contact/${contactId}`);
    }
    
    function handleCancel(){
        setFormData({
            firstName: '',
            lastName: '',
            twitter: '',
            avatar: '',
            notes:'',
        })
        navigate(`/contact/${contactId}`);
    }
    return(
        <form onSubmit={handleSubmit} className="contact-form">
        <p>
            <span>Name</span>
            <input
                placeholder="First"
                aria-label="First Name"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                placeholder="Last"
                aria-label="Last Name"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            /> 
        </p>
        <label>
            <span>Twitter</span>
            <input
                type="text"
                name="twitter"
                placeholder="@Jack"
                onChange={handleChange}
                value={formData.twitter}
            />
        </label>
        <label>
            <span>Avatar URL</span>
            <input
                placeholder="https://example.com/avatar.jpg"
                aria-label="Avatar URL"
                type="text"
                name="avatar"
                onChange={handleChange}
                value={formData.avatar}
            />
        </label>
        <label>
            <span>Notes</span>
            <textarea
                name="notes"
                rows={6}
                onChange={handleChange}
                value={formData.notes}
            />
        </label>
        <p>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </p>
    </form>
    )
}