import { createContext } from "react";
import { useState, useEffect} from "react";
import { useContext } from "react";


const AddContext = createContext()

export function useLocalContext()
{
  return useContext(AddContext)
}

export function ContextProvider({children})
{
  const [values, setValues] = useState(
    {
      name: "",
      email: "",
      contact: "",
      url:"",
    }
  );

  const [datas,setData] = useState([])
  
 

const createCard = async (dat) => {
  const res = await fetch('http://localhost:5000/cards',{
    "method" : "POST",
    "headers" : {
      "Content-type" : "application/json",
    },
    "body" : JSON.stringify(dat)
  }
    )

  const da = await res.json()
  setData([...datas,da])

  }

  const deleteCard = async (id) => {
    const res = await fetch('http://localhost:5000/cards',{
      "method" : "DELETE",
    })

    setData(datas.filter((data) => data.id !== id))
  }



  const fetchData = async () => {
    try{
      const res = await fetch('http://localhost:5000/cards')
      const dat = await res.json()
      console.log(dat)
      return dat;
    }catch(error)
    {
      console.log(error)
    }     
  }

  const value = {values,setValues,fetchData};
  return <AddContext.Provider value = {value} >{children}</AddContext.Provider>

}