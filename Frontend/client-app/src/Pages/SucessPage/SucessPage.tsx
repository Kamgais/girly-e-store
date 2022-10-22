import React,{FunctionComponent, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../Redux/cartSlice';
import Footer from '../../Layouts/Footer/Footer';
import './sucess.styles/sucess.css';

const SucessPage:FunctionComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
       dispatch(emptyCart())
    },[])
  return (
    <div style={{display: 'flex', flexDirection:'column', minHeight:'100vh'}}>
    <div className='success-page-container'>

        <div className="sucess-image">
        <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="sucess-description">
            <h1>Congratulation!</h1>
            <h3>Your Order is Successfully accepted</h3>
            <p>Your items has been placed and is on it's way to being processed</p>
        </div>

        <div className="back-to-shop">
            <button onClick={() => navigate('/products')}>Keep Shopping</button>
        </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default SucessPage
