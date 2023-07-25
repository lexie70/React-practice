import React, {useState} from 'react';
import './App.css'

export default function App() {
  const[data,setData]= useState([{
    name: "name",
    email:"email"
  }])
  const[profileData,setProfileData]= useState([{name:"maria", email:23},{name:"pablo", email:23}])
 
  const handleSubmit= (event)=>{
    event.preventDefault();
    setProfileData([{}]);
    console.log(data);
    setData({
      name: "",
      email:""
    })
  }
  return (
    
      <div className="App">
        <form className="myForm" >
          <h1>Sign Up</h1>
          <label htmlFor= "name">Enter your name: </label>
          <input type='text'
          value={data.name}
          onChange={(e)=>{setData({...data,name:e.target.value})}}
          id='name'/>

          <label htmlFor='email'>Enter your email: </label>
          <input type='text'
           value={data.email}
           onChange={(e)=>{setData({...data, email: e.target.value})}}
           id='email'/>

          <button type='submit' onClick={handleSubmit}>Signup!</button>
        </form>
        <div className='user-list'>
          <h1>Users:</h1> 
          <ul>
            {profileData.map((item,index)=>{
              return(
                <li key={index}>User {index+1} : {item.name}</li>       
                )
              })}
            </ul>
          </div>
        </div>
      );
    }


    
      
      
