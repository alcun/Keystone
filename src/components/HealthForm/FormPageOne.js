import React from 'react'

const FormPageOne = () => {
  return (
      <>
    <h1>Details Form</h1>
    <label>Name</label>
    <input type="text" name="user_name"/>
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <label>When is you first session booked for?</label>
    <input type="date" name="session_date" />

    </> )
}

export default FormPageOne