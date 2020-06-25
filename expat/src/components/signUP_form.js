// Sign up Form
import React, {useState} from "react";
//import { useForm, Controller } from "react-hook-form";
//import axiosWithAuth from "../../utils/axiosWithAuth";



export default function SignUpForm() {

  const defaultValues = {
    name: "",
    email:"",
    password: "",
  };

  const [signUp, setSignUp] = useState(defaultValues) 

//equals anonymous function
const onHandleChange = (e) => {
  const name = e.target.name
  const value = e.target.value

  setSignUp({[name]:value})
}

  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
  };

  const handleSignUp = e =>{
    e.preventDefault()
    
    const newUser = {
      name: signUp.name,
      password: signUp.password,
      email: signUp.email,
   
    }
    
    axiosWithAuth('//make sure to update',newUser)
    .then(
        res=>{console.log(res)}
    )
    .catch(err => console.log(err))
    }

  return (
    <div>
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
        value={signUp.name}
        onChange={onHandleChange}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
         onChange={onHandleChange}
         value={signUp.email}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
         onChange={onHandleChange}
        value={signUp.password}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button type='submit'> Submit </button>
      </form>
    </div>
  );
}