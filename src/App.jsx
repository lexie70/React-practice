import React, {useState} from 'react';
import './App.css'

export default function App() {
  const[name,setName]= useState("")
  const[email,setEmail]= useState("")
  const[profileData,setProfileData]= useState([])
  const handleProfileData= ()=>{
    
  }
  return (
    
      <div className="App">
        <form className="myForm">
          <h1>Sign Up</h1>
          <label htmlFor= "name">Enter your name: </label>
          <input type='text'
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          id='name'/>

          <label htmlFor='email'>Enter your email: </label>
          <input type='email'
           value={email}
           onChange={(e)=>{setEmail(e.target.value)}}
           id='email'/>

          <button>Signup!</button>
        </form>
        <div className='user-list'>
          <h1>Users:</h1> 
        </div>
      </div>
    );
  }

    
      
      
