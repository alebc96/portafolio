import { useRef, useState } from 'react'

import './ContactForm.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const [name, setName] = useState(true)
  const [email, setEmail] = useState(true)
  const [message, setMessage] = useState(true)


  const form = useRef<HTMLFormElement>(null);

  const sendEmail =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(form.current){
      const formValues = new FormData(form.current);
      if(formValues.get('user_name') == ''){
        setName(false)
      }else{
        setName(true)
      }
      if(formValues.get('user_email') == ''){
        setEmail(false)
      }else{
        setEmail(true)
      }
      if(formValues.get('message') == ''){
        setMessage(false)
      }else{
        setMessage(true)
      }
      if(formValues.get('user_name') == '' || formValues.get('user_email') == ''|| formValues.get('message') == ''){
        errorNotify()
        return
      }
      emailjs.sendForm("alebc96", "template_rawlgzp", form?.current, "DpTKhJuqLI7RgRYAV")
      .then(()=>{
        notify();
        setMessage(true)
        setName(true)
        setEmail(true)
        form.current?.reset();
      }),(error: Error)=>{
        errorEmailNotify()
        console.log(error)
      }
    } 
  }

  const notify = () => toast.info("Thanks for writing me :D", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const errorNotify = () => toast.error("Introduce vallid data, please. =D",{
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const errorEmailNotify = () => toast.error("Something is wrong :(",{
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

 
  return (
    <div className='form-container'>
      <form ref={form} className='form-body' onSubmit={sendEmail}>
      <h2>Lets work together</h2>
        <div className='input-container'>
          <label>Name</label>
          <input type="text" name='user_name' placeholder='Full name'/>
          {name ? '' : <span className='span-error'>Name is required</span>}
        </div>
        <div className='input-container'>
          <label>Email</label>
            <input type="Email" name='user_email' placeholder='Email' />      
            {email ? '' : <span className='span-error'>Email is required</span>}      
        </div>

        <div className='input-container'>
          <label>Message</label>
          <textarea name='message' id='message'  color='30' rows={3} placeholder='Type here...'></textarea>
          {message ? '' :  <span className='span-error'>Please introduce a message</span>}
        </div>
        <div className="button-container">
          <button type='submit'>Send</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default ContactForm