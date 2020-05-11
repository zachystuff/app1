import React, { useEffect } from 'react';

import { useStateValue } from '../store/state';
import useSearchForm from './CustomHooks';

const Bar = () => {
    const [search, setSearch] = useStateValue({});
    const [hasError, setErrors] = useStateValue(false);
    
    // Event handler, custom hook
    const {inputs, handleInputChange, handleSubmit} = useSearchForm(() => {
        console.log(inputs);
    });

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch("");
    //         res
    //             .json()
    //             .then(res => setSearch(res))
    //             .catch(err => setErrors(err));
    //     }
        
    //     fetchData();
    // });
    
    return (
        <div>
            <h1>
                Book finder app by zachy! Search all your favorite books here!
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
          <input 
            type="text" 
            placeholder="search" 
            value={inputs.search}
            onChange={handleInputChange}
           />
                </label>
                <input type="submit" value="search" />
            </form>
        </div>
    )
};

export default Bar;