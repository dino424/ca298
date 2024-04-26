import { useState, useEffect } from "react";

function ShowSingleStudent(props) {
    const stud = props.stud;
    const [student, setStudent] = useState("");
    const [cohort, setCohort] = useState("");
    const [grades, setGrades] = useState([]);
    const [modules, setModules] = useState([]);

    const displayModules = () => {
        if (!Array.isArray(modules)) {
            return null;
        }
        return modules.map(elem => (
            <li key={elem.code}>{elem.full_name} {elem.code}</li>
        ));
    };

    const displayGrades = () => {
        if (!Array.isArray(grades)) {
            return null;
        }
        return grades.map(elem => {
            let moduleName = elem.module.split('/').filter(Boolean).pop();
            return <li key={moduleName}>{moduleName}: {elem.total_grade}%</li>;
        });
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/?stud=${stud}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(x => {
                if (x.student_id === stud) {
                    setStudent(x.first_name + " " + x.last_name);
                    setCohort(x.cohort.split('/').filter(Boolean).pop());
                }
            });
        })
        .catch(err => console.log(err));
    }, [stud]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohort}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setModules(data);
        })
        .catch(err => console.log(err));
    }, [cohort]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/grade/?student=${stud}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setGrades(data);
        })
        .catch(err => console.log(err));
    }, [stud]);

    return (
        <div className="container mt-5">
            <h3>{student}</h3>
            <h2>Modules:</h2>
            <ul>
                {displayModules()}
            </ul>
            <h2>Grades:</h2>
            <ul>
                {displayGrades()}
            </ul>
        </div>
    );
}

export default ShowSingleStudent;
