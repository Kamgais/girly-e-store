import React, {FunctionComponent} from 'react'
import './navigation.styles/navigationForm.css'

type Props = {
    action: string;
}

const NavigationForm:FunctionComponent<Props> = ({action}) => {
  return (
   <form style={{height : action=== 'SIGNUP'? '60vh': '35vh'}} className='navForm'>
    <h2 className='navFormTitle'>{action}</h2>
    <label htmlFor="username">Username</label>
    
    <input type="text" id="username" />
    { action === 'SIGNUP' &&  ( <>
    <label htmlFor="number">What's your call number?</label>
    <input type="number" id='number'/>
    <label htmlFor="email">What's your email ?</label>
    <input type="email"  id='email'/>
    </>
    )
}
    <label htmlFor="pwd">{action === 'SIGNUP'?  'Set a password': 'Enter your password'}</label>
    <input type="password" id="pwd" />
   { action === 'SIGNUP' && <>
    <label htmlFor="repeatPwd">repeat your password</label>
    <input type="password" id="repeatPwd" />
    </>
 } 

    <button className='navFormButton'>{action}</button>

    <p>{ action=== 'SIGNUP'? 'Already a account?' : 'Not a account?'} <a href="#">{action === 'SIGNUP'? 'LOGIN': 'SIGNUP' }</a></p>
    </form>
  )
}

export default NavigationForm
