import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function Registry() {
    // state variable,function that update the state
    const [registryData,setRegistryData]= useState([])
    const [textInput,setTextInput] = useState([])
    const [error,setError] =useState(false)
    const addItem= (e) =>{
        e.preventDefault();
        if (error) return;

        const tempData= [...registryData]//contain all past data
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }
    console.log(registryData)
    useEffect(() => {
        if (textInput.length >10)  setError(true);
        else setError(false);
    },[textInput]//because we have to check textInput

    )
    //Remove data from list registry
    const removeItem = (index) => {
        // since the state is read only create new list
        let newData = [...registryData]
        //create new list
        newData.splice(index,1) //index and no of elements need to remove
        setRegistryData(newData)
    }
   
    const editData =(index) => {
        if (error) return;
        let newData = [...registryData]
        newData[index]= textInput;
        setRegistryData(newData)
    }
    return (
        <div>
            <h1>Registry</h1>
            <Link to= "/"> Click here to go Home</Link>
            <form onSubmit= { addItem}>
                <label >Text Input :
            <input type = "text" value={textInput} onChange={ (e) => setTextInput(e.target.value)}/>
            </label>
            <input type= "submit" value= "Submit" />
            </form>
            {/* if error type Error ocuured else null */}
            {error? <span style= {{ color: "red"} }> Error ocuured.</span>: null}
            {/* map over registry data */}
            {
                registryData.map((item,index) => {
                    return(
                        // when we rendering a list in react we have to use index
                        <li key= {index}>{item}<button onClick={() => removeItem(index)}>Remove</button> <button onClick={() => editData(index)}>Edit</button></li>
                    )
                }

                )
            }
        </div>
    )
}
export default Registry;