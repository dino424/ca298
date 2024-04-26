import { useState } from 'react';
import CreateNewStudent from '../components/createnewstudent';

function NewStudent() {
    const [formData, setFormData] = useState({ student_id: "", first_name: "", last_name: "", cohort: "", email: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Student ID: ${formData.student_id}, First Name: ${formData.first_name}, Last Name: ${formData.last_name}, Cohort: ${formData.cohort}, Email: ${formData.email}`);
        setFormData({ student_id: "", first_name: "", last_name: "", cohort: "", email: "" });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Add a new student</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="student_id">Student ID:</label>
                            <input type="text" className="form-control" name="student_id" value={formData.student_id} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name:</label>
                            <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name:</label>
                            <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cohort">Cohort:</label>
                            <input type="text" className="form-control" name="cohort" value={formData.cohort} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <CreateNewStudent student_id={formData.student_id} first_name={formData.first_name} last_name={formData.last_name} cohort={formData.cohort} email={formData.email} />
        </div>
    );
}

export default NewStudent;