import { useEffect } from "react";

function CreateNewCohort({id="", year=0, degree=""}){
    useEffect(() => {
        if (id && year && degree){
            fetch("http://127.0.0.1:8000/api/cohort/", {
                method: 'POST',
                body: JSON.stringify({
                    id: id,
                    year: year,
                    degree: degree,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then( data => {
                    console.log('New cohort added:', data);
                })
                .catch(err => console.log(err));
            }
            }, [year, id, degree]);
        return null;
}

export default CreateNewCohort;