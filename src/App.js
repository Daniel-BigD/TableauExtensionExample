import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import Auth from './components/Auth';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (!Auth.getCredentials() && window.location.hash !== '') {
            Auth.storeCredentials().then(() => {
                setLoggedIn(true);
            });
        } else if (Auth.getCredentials()) {
            setLoggedIn(true);
        }
    }, []);

    return <Routes loggedIn={loggedIn} />;
};

export default App;
