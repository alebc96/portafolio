import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  //console.log(location.pathname == '/contact')
  return (
    <nav className='header-container'>
        <h1>aleBc</h1>
        <div className="header-right">
          {location.pathname == '/contact' ? <Link to="/">Home</Link> : <Link to="/contact">Contact me</Link>}  
        </div>
    </nav>
  )
}

export default Header