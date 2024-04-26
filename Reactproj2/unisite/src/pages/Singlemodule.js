import React, { useState } from 'react';
import ShowSingleModule from '../components/showsinglemodule';

const SingleModule = () => {
    const [module, setModule] = useState('');

    const handleModuleChange = (event) => {
        setModule(event.target.value);
    };

    const handleViewModule = () => {
        console.log('Viewing Module:', module);
    };

    return(  
        <section>
            <h1>Module: </h1>
            <input 
                type="text" 
                value={module} 
                onChange={handleModuleChange} 
                placeholder="Enter Module" 
            />
            <button onClick={handleViewModule}>View Module</button>
            {module && <ShowSingleModule mod={module} />}
        </section>
    )
};

export default SingleModule;