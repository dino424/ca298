import { useState, useEffect } from "react";

function CreateNewStudent({student_id="",first_name="", last_name="", cohort="", email=""}){
    const [error, setError] = useState(null);
    useEffect(() => {
        if (first_name && cohort && last_name && student_id && email){
            fetch("http://127.0.0.1:8000/api/student/", {
                method: 'POST',
                body: JSON.stringify({
                    student_id: student_id,
                    first_name: first_name,
                    last_name: last_name,
                    cohort: cohort,
                    email: email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add new student');
                }
                return response.json();
            })
                .then( data => {
                    console.log('New Student added:', data);
                    setError(null);
                })
                .catch(err =>{ 
                console.error(err);
                setError('Failed to add new student. Please try again.');
            });
            }
            }, [student_id, first_name, last_name, cohort, email]);
        return error ? <div>Error: {error}</div> : null;
}

export default CreateNewStudent;