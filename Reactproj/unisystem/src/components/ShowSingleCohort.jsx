import { useState, useEffect } from "react";

function ShowSingleCohort(){
    const [cohorts, setcohorts] = useState([])
    const displaycohorts = () =>{
        return cohorts.map(elem=>
            <li>{elem}</li>
        )
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/student/?cohort=COMSCI1")
        .then(response=>response.json())
        .then(data=>{
            setcohorts(data.map(e=>e.student_id))
        })
        .catch(err=>console.log(err))
        }, []
    )
    return(
        <ul>
        {displaycohorts()}
        </ul>
    )
}

export default ShowSingleCohort;