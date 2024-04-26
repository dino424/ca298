import React, { useState } from 'react';
import ShowSingleDegree from '../components/showsingledegree';

const SingleDegree = () => {
    const [degree, setDegree] = useState('');

    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
    };

    const handleViewDegree = () => {
        console.log('Viewing degree:', degree);
    };

    return(  
        <section>
            <h1>Degree: </h1>
            <input 
                type="text" 
                value={degree} 
                onChange={handleDegreeChange} 
                placeholder="Enter degree" 
            />
            <button onClick={handleViewDegree}>View Degree</button>
            {degree && <ShowSingleDegree deg={degree} />}
        </section>
    )
};

export default SingleDegree;