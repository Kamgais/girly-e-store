import React, {FunctionComponent} from 'react'
import GirlyLogo from '../../Assets/images/logo.png'

const Navbar: FunctionComponent = () => {
  return (
    <nav>
        <div className="logo">
            <img src={GirlyLogo} alt="" />
        </div>
        <div className="searchBar">
            <input type="text" className="searchInput" placeholder='search here...' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
            <ul className='icons-items'>
                <li className='icons-itemA'><i className="fa-solid fa-bars"></i></li>
                <li className='icons-itemB'><i className="fa-solid fa-user"></i></li>
                <li className='icons-itemC'></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
