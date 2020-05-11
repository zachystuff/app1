import React, { useEffect } from 'react';

import { useStateValue } from '../store/state';

const top = () => {
    const [search, setSearch] = useStateValue({});
    const [hasError, setErrors] = useStateValue(false);

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
            <form >
                <label>
          <input type="text" placeholder="search"/>
                </label>
                <input type="submit" value="search" />
            </form>
        </div>
    )
};

export default top;