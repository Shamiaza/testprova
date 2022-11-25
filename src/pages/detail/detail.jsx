const Detail =({fetchedData,handleStep})=>{
    const goBack=(path)=>()=>{
handleStep(path)

    }
return (<><div style={{display:"flex",justifyContent:""}}>
    {JSON.stringify(fetchedData)}
    </div>
    <button type="button" onClick={goBack("/")}></button>
    </>)
}
export default Detail
