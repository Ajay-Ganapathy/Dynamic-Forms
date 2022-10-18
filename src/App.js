import logo from './logo.svg';
import './App.css';
import InputContainer from './components/InputContainer/InputContainer';
import InputContainers from './components/cards/InputContainers/InputContainer';
import Card from './components/cards/card/Card';
import { useState , useEffect} from 'react'
import Cards from './components/cards/card/Cards';
import getUserIpDetails from './functions/userresponse'

function App() {

  const userResponse = {

    userName : 'test',
    
    }
  /*
   function getUserIpDetails(userResponses)
   {
    const {userName,userIp = '0.0.0.0'} = userResponses;
    const arr = new Array(userResponses.length)
    arr[0] = {userName,userIp}
    console.log(arr)
   }*/

  const arr = [{
    "name" : "Ram Kumar",
    "marks" : 500,
  },
  {
    "name" : "Ram",
    "marks" : 200,
  },
  
  {
    "name" : "somu",
    "marks" : 100,
  },
  
  {
    "name" : "varun",
    "marks" : 300,
  },
  
  {
    "name" : "siraj",
    "marks" : 400,
  },
  
  {
    "name" : "Arun",
    "marks" : 800,
  },
  
  
  ]
  
  const arrs = [85,23,45,67,89]
  function topThree(array)
  {
    //const first = 'First Student : ' + first
    const [first,second,third,rest] = array
    console.log(first,second,third)
    console.log(rest)
    return first
  }
  

  const [datas,setData] = useState([])
 
  useEffect(() => 
  {const getData = async () => {
    const gets = await fetchData()
    setData(gets)
    }

    getData()
  },[]
 

)
 

  const createCard = async (dat) => {
    const res = await fetch('http://localhost:5000/cardss',{
      "method" : "POST",
      "headers" : {
        "Content-type" : "application/json",
      },
      "body" : JSON.stringify(dat)
    }
      )
  
    const da = await res.json()
    console.log(da)
    setData([...datas,da])
  
    }
  
    const deleteCard = async (id) => {
      const res = await fetch(`http://localhost:5000/cardss/${id}`,{
        "method" : "DELETE",
      })
  
      setData(datas.filter((data) => data.id !== id))
      console.log(`data after delete = ${datas}`)
    }
  
  
  
    const fetchData = async () => {
      try{
        const res = await fetch('http://localhost:5000/cardss')
        const dat = await res.json()
        console.log(dat)
        return dat;
      }catch(error)
      {
        console.log(error)
      }     
    }

  return (
    <div style = {{background : 'yellow'}}>
      
      
      {getUserIpDetails(userResponse)}
    </div>
  );
}

export default App;
