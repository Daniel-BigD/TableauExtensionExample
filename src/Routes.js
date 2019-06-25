import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

const Routes = ({ loggedIn }) => {
    if (!loggedIn) {
        return (
            <Router>
                <Route exact path='/' component={Login} />
            </Router>
        );
    }

    return (
        <Router>
            <Route exact path='/' component={Home} />
        </Router>
    );
};

export default Routes;
