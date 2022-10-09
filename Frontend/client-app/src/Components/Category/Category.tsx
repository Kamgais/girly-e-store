import React,{FunctionComponent} from 'react'
import './category.styles/category.css';


type Props = {
  image: any,
  title: string
}

const Category:FunctionComponent<Props> = ({image, title}) => {
  return (
    <div className='category-layout'>
     <img className='category-layout-img' src={image} alt="" /> 
     <p className='category-layout-title'>{title}</p>
    </div>
  )
}

export default Category
