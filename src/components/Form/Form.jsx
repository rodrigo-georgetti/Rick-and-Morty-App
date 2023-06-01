import React, { useState } from 'react'
import validator from './validation';
const Form = (props) => {
    const {login} = props
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setErrors(validator({...userData, [event.target.name]: event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value})
    }
const handleSubmit = (event) => {
event.preventDefault()
login(userData)
}

    return (
    
    <form onSubmit={handleSubmit}>

    <div>
    <label>Email</label>
      <input type="text" value = {userData.email} name='email' onChange={handleChange}/> 
      {errors.e1 ? (<p>{errors.e1}</p>) :
      errors.e2 ? (<p>{errors.e2}</p>) :
       (<p>{errors.e3}</p>)
      }
      </div>
      <div>
      <label>Password</label>
      <input type="text" value = {userData.password} name='password' onChange={handleChange}/>
      {errors.p1 ? (<p>{errors.p1}</p>) :
      (<p>{errors.p2}</p>)
      }
    </div>
    <button type='submit'>
        Submit
    </button>
      
    </form>
  )
}

export default Form
