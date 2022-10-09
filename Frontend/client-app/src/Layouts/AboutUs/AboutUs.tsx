import React, {FunctionComponent} from 'react'
import './aboutUs.styles/aboutUs.css'

const AboutUs:FunctionComponent = () => {
  return (
    <div className='about-us-container'>
     <div className="about-us-text-box">
        <p className="small-title">Why Choose Us?</p>
        <h1 className="big-title">Makeup Makes Difference</h1>
        <p className="about-us-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Culpa placeat quod quo quisquam pariatur, corporis tempore fuga blanditiis commodi molestias. 
        Repellendus nulla assumenda architecto, esse deleniti qui deserunt rem enim.
        </p>
        <button className="about-us-btn">Read More</button>
        </div> 
    </div>
  )
}

export default AboutUs
