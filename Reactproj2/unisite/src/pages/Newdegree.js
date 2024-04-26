import { useState } from 'react';
import CreateNewDegree from '../components/createnewdegree';

function NewDegree() {
    const [formData, setFormData] = useState({ name: "", code: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Full Name: ${formData.name}, Shortcode: ${formData.code}`);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Create New Degree</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Shortcode:</label>
                            <input type="text" className="form-control" name="code" value={formData.code} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <CreateNewDegree name={formData.name} code={formData.code} />
        </div>
    );
}

export default NewDegree;
