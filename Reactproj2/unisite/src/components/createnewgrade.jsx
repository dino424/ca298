import { useEffect } from "react";

function CreateNewGrade(props){
    const stud = props.stud;
    const grade = props.grade;
    const mod = props.mod
    useEffect(() => {
        if (stud && grade && mod){
            fetch(`http://127.0.0.1:8000/api/grade/?student=${stud}&module=${mod}`, {
                method: 'POST',
                body: JSON.stringify({
                    total_grade: grade
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then( data => {
                    console.log('New grade for module added:', data);
                })
                .catch(err => console.log(err));
            }
            }, [stud, grade, mod ]);
        return null;
}

export default CreateNewGrade;