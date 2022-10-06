import React, {FunctionComponent} from 'react'
import {useSelector, useDispatch} from 'react-redux';

import {NavigateFunction, Link, useNavigate} from 'react-router-dom';
import Logo from '../../Assets/images/logo.png'
import './navbar.styles/navbar.css'


const Navbar: FunctionComponent = () => {
    const navigate:NavigateFunction = useNavigate();
    const dispatch = useDispatch();
    const {user,logged} = useSelector((state:any) => state.auth);
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
            {!logged? (
                <>
                <li className='icons-itemA' onClick={()=> navigate('/login')}>LOGIN</li>
                <li className='icons-itemB' onClick={()=> navigate('/register')}>REGISTER</li>
                </>

            ) : (
                <>
                <li className='icons-itemB' onClick={()=> navigate('/')}><i className="fa-solid fa-bars"></i></li>
                <li className='icons-itemB' onClick={()=> navigate('/')}><i className="fa-solid fa-cart-shopping"></i></li>
                <li className='icons-itemB' onClick={()=> navigate('/')}><i className="fa-solid fa-user"></i></li>
                </>
            ) }  
                

                
            </ul>
        </div>
        
        
    </nav>
  )
}

export default Navbar
