import React, {FunctionComponent, useState} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signIn } from '../../Redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { UserDto } from '../../DTOs/UserDto';
import { AuthService } from '../../Services/AuthService';
import './navigation.styles/navigationForm.css'

type Props = {
    action: string;
}

type ValidateField = {
  valid: boolean,
  msg?:string 
}

const NavigationForm:FunctionComponent<Props> = ({action}) => {
  const [user,setUser] = useState<UserDto>({
                                            username: '',
                                            password: '',
                                            email_address: '',
                                            phone_number: null
                                          });

  const [error, setError] = useState<ValidateField>()
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  
  // when inputs values change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value:string | number = e.target.value;
    const name:string= e.target.name;
    if(name === 'phone_number') {
      setUser({...user, [name]: Number(value)})
    }
    else{
      setUser({...user, [name]: value})
   
    }
    
    
  }


  //submit the form
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
   e.preventDefault();
   if(action === 'SIGNUP') {

    const isFormValid:ValidateField | null= validateForm();
    const errorField: HTMLDivElement| null = document.querySelector('#errorField');
    if(!isFormValid?.valid) {
     
     errorField!.style.display = 'block';
     errorField!.style.opacity = '1';
     setError({valid: false, msg: isFormValid?.msg})
    }
 
    else if(isFormValid?.valid) {
     AuthService.createAccount(user)
     .then((response) => {
       navigate('/login')
     })
     .catch((error) => {
      
     })
    }
   }

   else if(action === 'LOGIN') {
    console.log('hhh')
   AuthService.signIn(user).then((response) => {
     console.log(response.data);
     dispatch(signIn(response.data))
     navigate('/products');
     })
    .catch((error) => {
      console.log(error)
    })
    
   }
   
 }


  const validateForm = ():ValidateField | null => {
    let newUser = user;
    

    //validate username
    if(newUser.username.length < 6 || newUser.username.length > 30) {
     return {valid: false, msg: 'username must be between 6 to 30 letters'}
    }
    // validate email
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(newUser.email_address || '')) {
      return {valid: false, msg: 'email address is not valid'}
    }

    //phone number validation
    if(typeof(Number(newUser.phone_number)) !== 'number') {
      return {valid: false, msg: 'phone number must have only numbers'}
    }

    // validate passwords
    const pwd:HTMLInputElement | null = document.querySelector('#pwd');
    const repeatPwd: HTMLInputElement | null= document.querySelector('#repeatPwd')
    if(pwd?.value !== repeatPwd?.value) {
      return {valid: false, msg: 'passwords do not match'}
    }
  return {valid: true, msg: ''} ;
  }










  return (
    <>
    
   <form style={{height : action=== 'SIGNUP'? '70vh': '40vh', minHeight: action === 'SIGNUP'? '500px': '300px'}} className='navForm' onSubmit={(e) => handleSubmit(e)}>
   
    <h2 className='navFormTitle'>{action}</h2>
    <label htmlFor="username">Username</label>
    
    <input type="text" name='username' id="username" onChange={(e) => handleInputChange(e)} />
    { action === 'SIGNUP' &&  ( <>
    <label htmlFor="number">What's your call number?</label>
    <input type="number" name='phone_number' id='number' onChange={(e) => handleInputChange(e)}/>
    <label htmlFor="email">What's your email ?</label>
    <input type="email" name='email_address'  id='email' onChange={(e) => handleInputChange(e)}/>
    </>
    )
}
    <label htmlFor="pwd">{action === 'SIGNUP'?  'Set a password': 'Enter your password'}</label>
    <input type="password" name='password' id="pwd" onChange={(e) => handleInputChange(e)}/>
   { action === 'SIGNUP' && <>
    <label htmlFor="repeatPwd">repeat your password</label>
    <input type="password" name='rptPassword' id="repeatPwd"/>
    </>
 } 

    <button className='navFormButton'>{action}</button>

    <p>{ action=== 'SIGNUP'? 'Already a account?' : 'Not a account?'} <Link to={action === 'SIGNUP'? '/login':'/register'}>{action === 'SIGNUP'? 'LOGIN': 'SIGNUP' }</Link></p>
    </form>
    <div className="error" id='errorField'><i className="fa-sharp fa-solid fa-circle-xmark"></i><p className="errorMessage">{error?.msg}</p></div>
    </>
  )
}

export default NavigationForm
