
import React,{FunctionComponent, useState, useRef, useEffect} from 'react'
import './slider.styles/slider.css';
import 'animate.css';



const Slider:FunctionComponent = () => {
    const [index,setIndex] = useState<number>(0);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const bigTitleRef = useRef<HTMLHeadingElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    
    const imgData=[
        {title: 'New Collections', bigTitle: 'SKIN CARE', url: 'https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg'},
        {title: 'New Arrivals 2022', bigTitle: 'COSMETICS', url: 'https://images.pexels.com/photos/2878375/pexels-photo-2878375.jpeg'},
        {title: 'New Collections', bigTitle: 'SKIN CARE', url: 'https://images.pexels.com/photos/2463027/pexels-photo-2463027.jpeg'},
        {title: 'New Collections', bigTitle: 'SKIN CARE', url: 'https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg'},
    ];


    useEffect (() => {
      document.getElementById('container')!.style.backgroundImage = `linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url(${imgData[index].url})`;

     
    },[window.innerWidth,index])

    
     const reloadAnimation = () => {
        titleRef.current?.classList.remove('animate-1');
        bigTitleRef.current?.classList.remove('animate-2');
        btnRef.current?.classList.remove('animate-3');
        
        setTimeout(()=> {
            titleRef.current?.classList.add('animate-1');
            bigTitleRef.current?.classList.add('animate-2');
            btnRef.current?.classList.add('animate-3');
            
        }, 10)
        
        
        
     }

   

    const handleRight = () => {
        if(index >= 3) {
            setIndex(0);
        }
        else {
            setIndex(prevState=>prevState+1);
        }
        reloadAnimation()
        }

        const handleLeft = () => {
            if(index <= 0) {
                setIndex(3);
            }
            else {
                setIndex(prevState=>prevState-1)
            }
            reloadAnimation()
        }
  return (
    <div id='container'
     className='slider-container  '>
        <div className="slider-left">
            <h4 
              ref={titleRef}
             className='slider-left-title animate-1'>{imgData[index].title}</h4>
            <h1
            ref={bigTitleRef} 
            className="slider-left-big-title animate-2 ">{imgData[index].bigTitle}</h1>
            <button
            ref={btnRef} 
            className="slider-left-btn animate-3 ">Read More</button>
        </div>
        <div  className="slider-right ">
            <img className='slider-right-img' src={imgData[index].url} alt="makeup" />
        </div>
        <div className="slider-directions">
            <div className="slider-direction-left" onClick={handleLeft}><i className="fa-solid fa-chevron-left"></i></div>
            <div className="slider-direction-right" onClick={handleRight}><i className="fa-solid fa-chevron-right"></i></div>
        </div>
      
    </div>
  )
}

export default Slider
