
import React, { useRef } from 'react'
import { useState  } from 'react';
import './style.css';
import validator from 'validator';
import { useLocalContext } from '../../../context/context';

const Inputs = (props) => {
  const {label,errorMessage,...inputvalues} = props;
  const [focussed,setfocussed] = useState(false)
  const [formErrors,setFormErrors] = useState('')
  const [colors,setColor] = useState('red')
  const {values,setValues} = useLocalContext();
 

function onChange(e)
{

  setValues({...values, [e.target.name] : e.target.value })
 
  /*if(e.target.type === 'password')
  {
    validate(e.target.value)
  }*/

}

function onSubmit(e)
{

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

export default Inputs
