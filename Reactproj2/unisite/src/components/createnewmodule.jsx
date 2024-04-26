import { useEffect } from "react";

function CreateNewModule({name="", code="", rec=[""], ca_split=0}){
    useEffect(() => {
        if (name && code && rec){
            fetch("http://127.0.0.1:8000/api/module/", {
                method: 'POST',
                body: JSON.stringify({
                    full_name: name,
                    shortcode: code,
                    delivered_to: rec,
                    ca_split: ca_split,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then( data => {
                    console.log('New Module added:', data);
                })
                .catch(err => console.log(err));
            }
            }, [name, code, rec, ca_split]);
        return null;
}

export default CreateNewModule;