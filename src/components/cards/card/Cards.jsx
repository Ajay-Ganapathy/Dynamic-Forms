import React from 'react'
import Card from './Card'

const Cards = ({datas,onDel}) => {
  return (
    <div>
          <div class="container" id = "course">


            <div class="row text-center g-4">
              <div className='col'>
            {datas.map((data) => <div className='col'>
               <Card key = {data.id} data = {data} onD = {onDel} />
               </div>
               )}
            </div>
            </div>
    </div>
      
    </div>
  )
}

export default Cards