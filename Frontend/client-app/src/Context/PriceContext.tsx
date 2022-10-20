import React,{FunctionComponent, createContext, useState} from 'react'

export interface IPriceContext {
    totalPrice:number[],
    handleCalculate:(price:number) => void
}

export const priceContext = createContext<IPriceContext>({totalPrice:[0],handleCalculate:(price:number)=>{return;}});


type Props = {
    children: JSX.Element
}

const PriceContext:FunctionComponent<Props> = ({children}) => {
    const [price,setPrice] = useState<number[]>([])

    const handleCalculate = (subPrice:number) => {
        setPrice(prevState => [...prevState, subPrice])

    }
  return (
    <priceContext.Provider value={{totalPrice:price, handleCalculate}}>
      {children}
    </priceContext.Provider>
  )
}

export default PriceContext
