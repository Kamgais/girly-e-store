import React, {FunctionComponent, useContext} from 'react'
import { burgerContext } from '../../Context/BurgerContext';
import { BurgerContextInterface } from '../../Context/BurgerContext';
import {useSelector, useDispatch} from 'react-redux';

import {NavigateFunction, Link, useNavigate} from 'react-router-dom';
import Logo from '../../Assets/images/logo.png'
import './navbar.styles/navbar.css'


const Navbar: FunctionComponent = () => {
    const navigate:NavigateFunction = useNavigate();
    const dispatch = useDispatch();
    const {opened,changeOpened} = useContext<BurgerContextInterface>(burgerContext);
    const {user,logged} = useSelector((state:any) => state.auth);
    const {items} = useSelector((state:any) => state.cart)
  return (
    <nav className='navBar'>
        <div className="logo">
            <img src={Logo} alt="" onClick={() => navigate('/home')} />
        </div>
        
        <div className="searchBar">
            <input type="text" className="searchInput" placeholder='search here...' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
            <ul className='icons-items'>
            {!logged || !user? (
                <>
                <li className='icons-itemA' onClick={()=> navigate('/login')}>LOGIN</li>
                <li className='icons-itemB' onClick={()=> navigate('/register')}>REGISTER</li>
                </>

            ) : (
                <>
                <li className='icons-itemB' onClick={() => changeOpened('0%')}><i className="fa-solid fa-bars"></i></li>
                <li className='icons-itemB' style={{position:'relative'}} onClick={()=> navigate('/cart')}><i className="fa-solid fa-cart-shopping"></i> { items.length !== 0 && <div className="items-numbers" style={{width:'20px', height:'20px', position:'absolute', background:'#e84393', top:'-30%', right: '-20%', borderRadius:'50%', color:'white', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'10px', fontFamily:'Roboto'}}>{items.length}</div> }</li>
                <li className='icons-itemB' onClick={()=> navigate('/profile')}><i className="fa-solid fa-user"></i></li>
                </>
            ) }  
                

                
            </ul>
        </div>
        
        
    </nav>
  )
}

export default Navbar
