import React from 'react'
import './categories.styles/categories.css';
import Category from '../../Components/Category/Category';
import imageOne from '../../Assets/images/category-1.png';
import imageTwo from '../../Assets/images/category-2.png';
import imageThree from '../../Assets/images/category-3.png';
import imageFour from '../../Assets/images/category-4.png';
import imageFive from '../../Assets/images/category-5.png';
import imageSix from '../../Assets/images/category-6.png';

const Categories = () => {
  return (
    <div className='categories-container'>
     <Category image={imageOne} title= 'Comestics'/> 
     <Category image={imageTwo} title= 'Makeup'/>
     <Category image={imageThree} title='Powder'/>
     <Category image={imageFour} title='Lotions'/>
     <Category image={imageFive} title='Lipstick'/>
     <Category image={imageSix} title='Mascara'/>
    </div>
  )
}

export default Categories;
