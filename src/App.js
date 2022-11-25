import {useState,useEffect} from 'react'
import {Home,Detail} from "./pages"
import './App.css';

function App() {
const [route,setRoute]=useState("/")
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    const [fetchedData,setFetchedData]=useState({})

    const fetchData=async()=>{
        const data = await fetch(url)
        const dataToJson = await data.json()
        console.log(dataToJson)
        setFetchedData(dataToJson)
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    // const logMyState=()=>{
    //     console.log(fetchedData)
    // }
        

  return (
   <>
      {route==="/" && ( <Home stepHandle={setRoute}/>)}
      {route==="detail" && (<Detail fetchedData={fetchedData} handleStep={setRoute}/>)}
      </>
      
  )
}

export default App;
