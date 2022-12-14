import React,{FunctionComponent, useState, useEffect, Dispatch, HTMLInputTypeAttribute} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { CountryDto } from '../../DTOs/CountryDto';
import { CustomerDto } from '../../DTOs/CustomerDto';
import { UserDto } from '../../DTOs/UserDto';
import Footer from '../../Layouts/Footer/Footer';
import { updateUser } from '../../Redux/actions/user.actions';
import { CountryService } from '../../Services/CountryService';
import './profile.styles/profile.css';




const Profile:FunctionComponent = () => {
  const [file,setFile] = useState<File|null>();
  const [countries,setCountries] = useState<CountryDto[]|null>();
  const {user} = useSelector((state:any) => state.auth);
  const {customer} = useSelector((state:any) => state.customer);
  const [updatedUser,setUpdatedUser] = useState<UserDto|null>({
    username: user.username,
    email_address: user.email_address,
    password: '',
    phone_number: user.phone_number
    
  });
  const [updatedCustomer, setUpdatedCustomer] = useState<CustomerDto|null>();

  const dispatch:Dispatch<(dispatch:any) => Promise<void>> = useDispatch<any>();


  const handleUpdateUser = (e:React.ChangeEvent<HTMLInputElement>) => {

  const newUser:UserDto|null = {...updatedUser!, [e.target.name]:e.target.value};
    console.log(newUser);
    setUpdatedUser(newUser);
}

const handleUpdateCustomer = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
  
  let newCustomer:CustomerDto|null;
  if(e.target.name === 'postalCode' || e.target.name === 'houseNr') {
    newCustomer = {...updatedCustomer, [e.target.name]: +e.target.value}
}
 else {
  newCustomer = {...updatedCustomer, [e.target.name] : e.target.value}
 }

console.log(newCustomer);
  setUpdatedCustomer(newCustomer);
}


const updateCustomerProfile = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
}

const updateUserProfile = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 dispatch(updateUser(user.id, updatedUser))
}


  const fetchCountries = async() => {
    const response = await CountryService.getAllCountries();
    setCountries(response);
  }


  useEffect(() => {
    fetchCountries()  
  },[])
  return (
    <div  style={{display: 'flex', flexDirection:'column', minHeight:'100vh'}}>
    <div className='profile-container'>
      <h1 className="profile-container-title">User <span>Profile</span></h1>
      <div className="profile-container-img">
        <label htmlFor="profilePic"><i className="fa-solid fa-pen-to-square"></i></label>
         <input type="file" id='profilePic' accept='jpeg' onChange={(e)=>setFile(e.target.files![0])} />
        <img src={!file? '': URL.createObjectURL(file)}alt="" />
      </div>
      <div className="profile-container-form">
        <div className="profile-infos">
          <form onSubmit={(e)=>updateUserProfile(e)}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username'  placeholder={user.username} onChange={(e)=> handleUpdateUser(e)}/>
            <label htmlFor="email">Email</label>
            <input type="email_address" id='email_address' name='email_address' placeholder={user.email_address} onChange={(e)=> handleUpdateUser(e)}/>
            <label htmlFor="password">Set a new password</label>
            <input type="password" id='password' name='password' onChange={(e)=> handleUpdateUser(e)}/>
            <button>Update Profile</button>
          </form>
        </div>
        <div className="personal-infos">
        <form>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id='firstname' name='firstname'  onChange={(e) => handleUpdateCustomer(e)}/>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id='firstname' name='firstname' onChange={(e) => handleUpdateCustomer(e)} />
          <label htmlFor="postalCode">Postal Code</label>
          <input type="number"  id='postalCode' name='postalCode' onChange={(e) => handleUpdateCustomer(e)}/>
          <label htmlFor="region">Region</label>
          <input type="text"  id='region' name='region' onChange={(e) => handleUpdateCustomer(e)}/>
          <label htmlFor="street">Street</label>
          <input type="text" id='street' name='street' onChange={(e) => handleUpdateCustomer(e)} />
          <label htmlFor="houseNr">Housenumber</label>
          <input type="number"  id='houseNr' name='houseNr' onChange={(e) => handleUpdateCustomer(e)}/>
          <label htmlFor="country">Country</label>
          <select name="countryName" id="" onChange={(e) => handleUpdateCustomer(e)}>
            {
              countries?.map((country,index) => (
                <option key={index}>{country.country_name}</option>
              ))
            }
          </select>
          <button>Update personal informations</button>
        </form>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Profile
