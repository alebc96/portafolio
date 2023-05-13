import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactForm from './components/form/ContactForm';
import Header from './components/header/Header'

function App() {

  return (
    < >
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='contact' element={
          <>
            <Header></Header>
            <ContactForm></ContactForm>
          </>
        }/>
      </Routes>
      
    </>
  )
}

export default App
