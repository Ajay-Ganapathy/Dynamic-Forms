import React, { useState } from 'react'
import Input from '../Input/Input'
import './cont.css'
//import PasswordChecker from './passwordChecker';

const InputContainer = () => {

 /*
  const [passwordInput, setPasswordInput] = useState("");
  const [poorPassword, setPoorPassword] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [strongPassword, setStrongPassword] = useState(false);
  const [passwordError, setPasswordErr] = useState("");

const handlePasswordChange=(evnt)=>{
  setPasswordInput(evnt.target.value);

}

const passwordStrength=(evnt)=>{

  const passwordValue= evnt.target.value;
  const passwordLength= passwordValue.length;

  const poorRegExp = /[a-z]/;
  const weakRegExp = /(?=.*?[0-9])/;;
  const strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  const whitespaceRegExp = /^$|\s+/;

  const poorPassword= poorRegExp.test(passwordValue);
  const weakPassword= weakRegExp.test(passwordValue);
  const strongPassword= strongRegExp.test(passwordValue);
  const whiteSpace= whitespaceRegExp.test(passwordValue);
 
  if(passwordValue===''){
      setPasswordErr("Password is Empty");
  }else{
      
      // to check whitespace
      if(whiteSpace){
          setPasswordErr("Whitespaces are not allowed");
      }
      // to check poor password
      if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
      {
      setPoorPassword(true);
      setPasswordErr("Password is Poor");
      }
      // to check weak password
      if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
      {
          setWeakPassword(true);
          setPasswordErr("Password is Weak");
      }else{
      setWeakPassword(false); 
      }
      // to check strong Password
      if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
      {
          setStrongPassword(true);
          setPasswordErr("Password is Strong");
      }else{
         setStrongPassword(false);  
      }
  }
}*/

 /* const [formErrors,setFormErrors] = useState({})
  const [values, setValues] = useState(
    {
      username: "",
      email: "",
      password: "",
    }
  );

  const inputList = [

    {
        id : 1,
        type : "text",
        name : "username",
        label : "Enter your username",
        placeholder : "your Username",
       errorMessage : "Fill out this field",
        datatestid : 'username',
        required :true,
    },

    {
      id : 2,
        type : "email",
        name : "email",
        label : "Enter your email",
        placeholder : "Your Email",
       errorMessage : `email is invalid`,
        datatestid : 'email',
        required : true,
    },

    {
        id : 3,
        type : "password",
        name : "password",
        label : "Enter your password",
        placeholder : "your Password",
        
          validate: {
            // ...
            length: (value) => value && value.length > 10 || 'mustBe10charsLong',
            digits: (value) => value && /\d/.test(value) || 'mustContainDigits',
            banned: (value) => value && value.includes('admin') || 'mustNotBeBanned',
            // ...
          },
         
        datatestid : 'password',
        errorMessage : 'password Invalid',
        required : true,
    },

]

function onChange(e)
{

  setValues({...values, [e.target.name] : e.target.value })

}
console.log(values)*/

function onSubmit(e)
{
  e.preventDefault();
  //setFormErrors(validate(values))

}
/*
const validate = ({values}) =>{
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.username)
  {
    errors.username = "username is required!";
  }
  if(!values.email)
  {
    errors.email = "Email is required"
  }else if(!regex.test(values.email)){
    errors.email = "This is not a valid email format"
  }
  if(!values.password)
  {
    errors.password = "Password is required"
  }else if(values.password.length<4)
  {
    errors.password = "Password must be greater than 3"
  }

  return errors;
}*/

const inputList = [

  {
      id : 1,
      type : "text",
      name : "username",
      label : "Enter your username",
      placeholder : "your Username",
     errorMessage : "Fill out this field",
      datatestid : 'username',
      required :true,
  },

  {
    id : 2,
      type : "email",
      name : "email",
      label : "Enter your email",
      placeholder : "Your Email",
     errorMessage : `Fill out this field`,
      datatestid : 'email',
      required : true,
  },

  {
      id : 3,
      type : "password",
      name : "password",
      label : "Enter your password",
      placeholder : "your Password",
      
        validate: {
          // ...
          length: (value) => value && value.length > 10 || 'mustBe10charsLong',
          digits: (value) => value && /\d/.test(value) || 'mustContainDigits',
          banned: (value) => value && value.includes('admin') || 'mustNotBeBanned',
          // ...
          // regex for minimum 1 character and minimum 1 capital letter
        },
       
      datatestid : 'password',
      errorMessage : 'Fill out this field',
      required : true,
  },

]
  return (

   
    <div className = "main">

      <form onSubmit = {onSubmit}>
        <h1>Register Now</h1>

        {inputList.map((input) => (
          <>
          <Input
          key = {input.id}
          {...input}
          
          />        
          </>
        )) 

        }

          <button>Submit</button>

      </form>
    </div>
  )
}

export default InputContainer 