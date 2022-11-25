import React,{useState,useEffect} from 'react'
const Home = ({stepHandle})=>{

    const changeRoute=(path)=>()=>{
        console.log(path)
        stepHandle(path)
    }

return (<>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem"}}>
    <h1>Home</h1>
    <button onClick={changeRoute("detail")} type="button">clic</button>
    </div>

    </>)
}
export default Home
