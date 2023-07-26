import React, {useState} from 'react';
import './App.css'

export default function App() {
  const[data,setData]= useState([{
    name: "name",
    email:"email"
  }])
  const[profileData,setProfileData]= useState([
    {name:"maria",email:"sdds@sd"},
    {name:"lola",email:"lola@lol"}])

  const handleUpdate = (data,name)=>{
    setProfileData((prev)=> prev.map((item)=>{
      if (name===item.name) {
        item.userid = data.id
      }
      return item
    }))
  }
  
 
  const handleSubmit= (event)=>{
    event.preventDefault();
    const newUser={...data}
    setProfileData([...profileData,newUser]);
    setData({
      name: "",
      email:""
    })
  }

  const postFetch = (name,email)=>{
    return(
      fetch("https://jsonplaceholder.typicode.com/posts", {
     
    method: "POST",
     
    body: JSON.stringify({
        name: name,
        email: email,
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json()) 
.then(data => {handleUpdate(data,name) ; console.log(data.id)})
    )
  }


  return (
    
      <div className="App">
        <form className="myForm"  onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor= "name">Enter your name: </label>
          <input type='text'
          value={data.name}
          onChange={(e)=>{setData({...data,name:e.target.value})}}
          id='name'/>

          <label htmlFor='email'>Enter your email: </label>
          <input type='email'
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
                <li key={index} onClick={()=> postFetch(item.name, item.email) }>User {index+1} : {item.name} {item.userid && `ID: ${item.userid}`} </li>       
                )
              })}
            </ul>
          </div>
        </div>
      );
    }


    
      
      
