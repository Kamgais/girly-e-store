import React,{Dispatch, FunctionComponent, SetStateAction} from 'react'
import './pagination.styles/pagination.css';

type Props = {
    nPages: number,
    currentPage:number,
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination:FunctionComponent<Props> = (props:Props) => {



  const nextPage = () => {
    if(props.currentPage !== props.nPages) {
      props.setCurrentPage(props.currentPage + 1)
    }
  }


  const prevPage = () => {
    if(props.currentPage !== 1) {
      props.setCurrentPage(props.currentPage -1);
    }
  }
    
  return (
    <div className='pagination-container' style={{marginTop: '500px'}}>
     <a onClick={prevPage}>PREV</a> 
     {
        Array.from(Array(props.nPages +1).keys()).slice(1).map((pageNumber, index) => (
            <span className ={props.currentPage === pageNumber?'current-page': ''} key={index} onClick={() => props.setCurrentPage(pageNumber)} >{pageNumber}</span>
        ))
     }
     <a  onClick={nextPage}>NEXT</a>
    </div>
  )
}

export default Pagination
