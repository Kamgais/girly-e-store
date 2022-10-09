import React, {FunctionComponent} from 'react'
import './footer.styles/footer.css'

const Footer:FunctionComponent= () => {
  return (
    <div className='footer-container'>
     <div className="footer-container-bar"></div> 
     <div className="footer-container-infos">
        <p>Created By <span>Cyril Kamgais</span> | All Rights Reserved!</p>
     </div>
      
    </div>
  )
}

export default Footer
