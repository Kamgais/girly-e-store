import React, {FunctionComponent} from 'react'
import Logo from '../../Assets/images/logo.png'
import './navbar.styles/navbar.css'


const Navbar: FunctionComponent = () => {
  return (
    <nav className='navBar'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        
        <div className="searchBar">
            <input type="text" className="searchInput" placeholder='search here...' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
            <ul className='icons-items'>
                <li className='icons-itemA'>LOGIN</li>
                <li className='icons-itemB'>REGISTER</li>
                
            </ul>
        </div>
        
        
    </nav>
  )
}

export default Navbar
