import React,{FunctionComponent, createContext, useState} from 'react'



export interface BurgerContextInterface {
    opened: string;
    changeOpened: (value:string) => void
}

type Props = {
 children: JSX.Element
}



export const burgerContext = createContext<BurgerContextInterface>({opened: '', changeOpened() {
    return;
},});
const BurgerContext:FunctionComponent<Props> = ({children}) => {
const [opened,setOpened] = useState<string>('');

const changeOpened = (value:string) => {
    setOpened(value);
}

  return (
    <burgerContext.Provider value={{opened,changeOpened}} >
     {children}
    </burgerContext.Provider>
  )
}

export default BurgerContext
