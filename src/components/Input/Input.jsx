/*import React, { useRef } from 'react'
import { useState  } from 'react';
import './style.css';
import validator from 'validator';

const Input = (props) => {
  const {label,errorMessage,...inputvalues} = props;
  const [focussed,setfocussed] = useState(false)
  const [formErrors,setFormErrors] = useState('')
  const [colors,setColor] = useState('red')
  const [values, setValues] = useState(
    {
      username: "",
      email: "",
      password: "",
    }
  );

 

function onChange(e)
{

  setValues({...values, [e.target.name] : e.target.value })
 
  /*if(e.target.type === 'password')
  {
    validate(e.target.value)
  }
  

  

}
  console.log(`values = ${inputvalues.datatestid}`)

  const validate = (e) =>{
    console.log(`Empty field : ${e.target.value}`)
    if(e.target.value === '')
    {
      setFormErrors(String(errorMessage))
    }else{
      setFormErrors('')
    }

    if(e.target.type === 'email')
    {
      console.log(e.target.type)
      if(e.target.value === ''){
        setFormErrors(String(errorMessage))
      }
      else if(!validator.isEmail(e.target.value))
      {
        setFormErrors("Invalid Email")
      }
    
      else{
        setFormErrors("")
      }
    }
 if(e.target.type === 'password')
 {
  console.log(`${validator.isAlphanumeric(e.target.value)}`)
/*(e.target.value.length <1 && validator.isUppercase()) || ( e.target.value.length <1 && validator.isSpecial(e.target.value))  || validator.isAlphanumeric() || (validator.isUppercase()  && validator.isSpecial(e.target.value)) || (validator.isUppercase()  &&isNumeric(e.target.value)) || validator.isNumeric()  && validator.isSpecial()

if( (validator.isStrongPassword(e.target.value,{
  minLength : 0
})) || validator.isStrongPassword(e.target.value,{
  minUppercase:0
}) || validator.isStrongPassword(e.target.value,{
  minNumbers:0
}) || validator.isStrongPassword(e.target.value,{
  minSymbols:0,
})){
  setColor('red')
  return setFormErrors("Password is Very Weak")
} 
  if(validator.isStrongPassword(e.target.value,{
    minLength : 1,minUppercase:1
  } || validator.isStrongPassword(e.target.value,{
    minLength : 1, minSymbols:1,
  }) || validator.isStrongPassword(e.target.value,{
    minLength : 1,minNumbers:1 ,
  }) || validator.isStrongPassword(e.target.value,{
    minUppercase:1, minSymbols:1,
  })|| validator.isStrongPassword(e.target.value,{
    minUppercase:1,minNumbers:1 ,
  }) || validator.isStrongPassword(e.target.value,{
     minNumbers:1 , minSymbols:1,
  }))){
    setColor('red')
   return setFormErrors("Password is  Weak")
  }  
   

    if(validator.isStrongPassword(e.target.value,{
      minLength : 1,minUppercase:1,minNumbers:1 , minSymbols:1,
    })){

      setFormErrors("Password is Very Strong")  
      setColor('green')
     
    }
    else{
      setFormErrors("Password is Strong")
      setColor('orange')
    } 
    
 }
}

  const uservalid = (value) =>{
 
    if(validator.isStrongPassword(value,{
      minLength : 1,
    })){
      setFormErrors("Field is required")
    }
    
  }

  function handleFocus(e)
  {
    setfocussed(true)
    validate(e)
  }

  function pass(e){
    setfocussed(true)
    setFormErrors(validate(e.target.values))
  }
  return (
   
    <div className = "inputs">
      <label> {label}</label>
      <input
      {...inputvalues}
      onChange = {onChange}
      onBlur = {handleFocus}
      onFocus = {() =>{
        console.log(`from console = ${inputvalues.datatestid}`)
        setfocussed(true)
      }
       }
      focussed = {focussed.toString()}
      />
      {console.log(`error : ${formErrors}`)}
      <span  className={focussed && colors === 'orange'  ? 'formvis' : focussed && colors === 'green'?'uvis':'ivis'}> {formErrors} </span>
  
      
    </div>
    
  )
}

export default Input*/


import React, { useRef } from 'react'
import { useState  } from 'react';
import './style.css';
import validator from 'validator';

const Input = (props) => {
  const {label,errorMessage,...inputvalues} = props;
  const [focussed,setfocussed] = useState(false)
  const [formErrors,setFormErrors] = useState('')
  const [colors,setColor] = useState('red')
  const [values, setValues] = useState(
    {
      username: "",
      email: "",
      password: "",
    }
  );

 

function onChange(e)
{

  setValues({...values, [e.target.name] : e.target.value })
 
  /*if(e.target.type === 'password')
  {
    validate(e.target.value)
  }*/
  

  

}
  console.log(`values = ${inputvalues.datatestid}`)

  const validate = (e) =>{
    console.log(`Empty field : ${e.target.value}`)
    if(e.target.value === '')
    {
      setFormErrors(String(errorMessage))
    }else{
      setFormErrors('')
    }

    if(e.target.type === 'email')
    {
      console.log(e.target.type)
      if(e.target.value === ''){
        setFormErrors(String(errorMessage))
      }
      else if(!validator.isEmail(e.target.value))
      {
        setFormErrors("Invalid Email")
      }
    
      else{
        setFormErrors("")
      }
    }
 if(e.target.type === 'password')
 {
  console.log(`${validator.isAlphanumeric(e.target.value)}`)
/*(e.target.value.length <1 && validator.isUppercase()) || ( e.target.value.length <1 && validator.isSpecial(e.target.value))  || validator.isAlphanumeric() || (validator.isUppercase()  && validator.isSpecial(e.target.value)) || (validator.isUppercase()  &&isNumeric(e.target.value)) || validator.isNumeric()  && validator.isSpecial()*/
  if(e.target.value.length <1){
    setColor('red')
   return setFormErrors("Password is very Weak")
  }  
    if( (validator.isAlphanumeric(e.target.value)) || (validator.isLowercase(e.target.value) && validator.isUppercase(e.target.value) )){
      setColor('red')
      return setFormErrors("Password is Weak")
    } 

    if(!validator.isStrongPassword(e.target.value,{
      minLength : 1,minUppercase:1,minNumbers:1 , minSymbols:1,
    })){
      setFormErrors("Password is Strong")
      setColor('orange')
    }
    else{
      setFormErrors("Password is Very Strong")  
      setColor('green')
    } 
    
 }
}


  function handleFocus(e)
  {
    setfocussed(true)
    validate(e)
  }

 
  return (
   
    <div className = "inputs">
      <label> {label}</label>
      <input
      {...inputvalues}
      onChange = {onChange}
      onBlur = {handleFocus}
      onFocus = {() =>{
        console.log(`from console = ${inputvalues.datatestid}`)
        setfocussed(true)
      }
       }
      focussed = {focussed.toString()}
      />
      {console.log(`error : ${formErrors}`)}
      <span  className={focussed && colors === 'orange'  ? 'formvis' : focussed && colors === 'green'?'uvis':'ivis'}> {formErrors} </span>
  
      
    </div>
    
  )
}

export default Input
