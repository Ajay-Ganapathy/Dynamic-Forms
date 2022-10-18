import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocalContext } from '../../../context/context'

const Card = ({data,onD}) => {
 
  return (
    <div>
      {console.log(data)}
     
      <div>
    <div class="col-6">
      <div class="card bg-dark text-light mb-3">
        <div class="card-body text-center">
          <div class="h1 mb-3">
            <img src = {data.values.url} className = "img-fluid" alt = "profile" />
          </div>
          <h3 class="card-title mb-3" >Name :{data.values.name}</h3>
          <p class="card-text">
           Email :{data.values.email}
          </p>
          <p class="card-text">
           Contact number: {data.values.contact}
          </p>
          <button className='btn btn-danger' onClick = {() => onD(data.id)}>Delete</button>
        </div>
      </div>
    </div>
              
  
              
            </div>
          </div>
    
  )
}

export default Card