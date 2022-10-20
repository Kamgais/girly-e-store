import React, {FunctionComponent, useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { burgerContext } from '../../Context/BurgerContext'

import './burgerBar.styles/burgerBar.css'

const BurgerBar:FunctionComponent = () => {
  const navigate = useNavigate()
  const {opened,changeOpened} = useContext(burgerContext);
    const styles = {
        container : {
            transform: `translateX(${opened})`
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', () => {
        changeOpened('-100%')
      } )
    }, [])
  return (
    <div    style={styles.container} className='burger-bar-container'>
        <div className="burger-bar-left">
            <img src="https://images.pexels.com/photos/12695346/pexels-photo-12695346.jpeg" alt="" />
        </div>
        <div className="burger-bar-right">
            <nav className='burger-bar-nav'>
                <ul className='burger-bar-ul'>
                    <li className="burger-bar-li" onClick={()=>navigate('/home')}>HOME</li>
                    <li className="burger-bar-li" onClick={()=>navigate('/products')}>SHOP</li>
                    <li className="burger-bar-li">GALLERY</li>
                    <li className="burger-bar-li">TEAM</li>
                    <li className="burger-bar-li">ARRIVALS</li>
                    <li className="burger-bar-li">BLOGS</li>
                </ul>
            </nav>
        </div>
        <div className="burger-bar-close" onClick={() => changeOpened('-100%')}><i className="fa-solid fa-xmark"></i></div>
      
    </div>
  )
}

export default BurgerBar
