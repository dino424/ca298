import React, { useState } from 'react';
import ShowSingleStudent from '../components/showsinglestudent';

const SingleStudent = () => {
    const [student, setStudent] = useState('');

    const handleStudentChange = (event) => {
        setStudent(event.target.value);
    };

    const handleViewStudent = () => {
        console.log('Viewing Student:', student);
    };

    return(  
        <section>
            <h1>Student: </h1>
            <input 
                type="text" 
                value={student} 
                onChange={handleStudentChange} 
                placeholder="Enter Student ID" 
            />
            <button onClick={handleViewStudent}>View Student</button>
            {student && <ShowSingleStudent stud={student} />}
        </section>
    )
};

export default SingleStudent;