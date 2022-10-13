import React,{Dispatch, FunctionComponent, SetStateAction} from 'react'
import './pagination.styles/pagination.css';

type Props = {
    nPages: number,
    currentPage:number,
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination:FunctionComponent<Props> = (props:Props) => {
    
  return (
    <div className='pagination-container' style={{marginTop: '500px'}}>
     <a href="#">PREV</a> 
     {
        Array.from(Array(props.nPages +1).keys()).slice(1).map((pageNumber, index) => (
            <span key={index}>{pageNumber}</span>
        ))
     }
     <a href="#">NEXT</a>
    </div>
  )
}

export default Pagination
