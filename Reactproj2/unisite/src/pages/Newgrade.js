import { useState } from 'react';
import CreateNewGrade from '../components/createnewgrade'; // Assuming the file path is correct

function Newgrade() {
    const [formData, setFormData] = useState({ stud: "", grade: "", mod: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        CreateNewGrade(formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">New Grade</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="stud">Student ID:</label>
                                    <input type="text" className="form-control" name="stud" value={formData.stud} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="grade">Grade:</label>
                                    <input type="text" className="form-control" name="grade" value={formData.grade} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mod">Module:</label>
                                    <input type="text" className="form-control" name="mod" value={formData.mod} onChange={handleChange} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newgrade;
