import { useState, useEffect } from "react";

function ShowAllDegrees(){
    const [degrees, setdegrees] = useState([])
    const displayDegrees = () =>{
        return degrees.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/degree")
        .then(response=>response.json())
        .then(data=>{
            setdegrees(data.map(e=>e.full_name))
        })
        .catch(err=>console.log(err))
        }, []
    )
    return(
        <ul>
        {displayDegrees()}
        </ul>
    )
}

export default ShowAllDegrees;