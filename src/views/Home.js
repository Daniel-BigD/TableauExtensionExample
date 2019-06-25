import React, { useState, useEffect } from 'react';
import API from '../components/API';

// Declare this so our linter knows that tableau is a global object
/* global tableau */

const Home = props => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        tableau.extensions
            .initializeAsync()
            .then(() => API.getPosts())
            .then(data => {
                let dashboard = tableau.extensions.dashboardContent.dashboard;

                document.getElementById('result').innerHTML = JSON.stringify(data);
            });
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p id='result' />
        </div>
    );
};

export default Home;
