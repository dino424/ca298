import { useEffect } from "react";

function CreateNewDegree({name="", code=""}){
    useEffect(() => {
        if (name && code){
            fetch("http://127.0.0.1:8000/api/degree/", {
                method: 'POST',
                body: JSON.stringify({
                    full_name: name,
                    shortcode: code,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then( data => {
                    console.log('New degree added:', data);
                })
                .catch(err => console.log(err));
            }
            }, [name, code]);
        return null;
}

export default CreateNewDegree;