import { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});

  const handleSubmit = (e: any) =>{
    e.preventDefault()
    alert(formData.message)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const name = e.target?.name
    const value = e.target?.value
    setFormData({...formData, [name]: value})
    console.log(formData)
  }

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    const value = e.target?.value
    setFormData({...formData, ['message']: value})
    console.log(formData)
  }
  
  return (
    <div className='form-container'>
      <form className='form-body' onSubmit={handleSubmit}>
      <h2>Lets work together</h2>
        <div className='input-container'>
          <label>Name</label>
          <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Full name' />
        </div>
        <div className='input-container'>
          <label>Email</label>
            <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='email' />
        </div>

        <div className='input-container'>
          <label>Message</label>
          <textarea name='message' id='' onChange={handleChangeTextArea} value={formData.message} color='30' rows={10} placeholder='type here...'></textarea>
        </div>
        <div className="button-container">
          <button type='submit'>Send</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactForm