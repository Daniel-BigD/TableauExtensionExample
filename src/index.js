import dotenv from 'dotenv';
import './tableau-extensions-1.latest';
import 'core-js/es/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tableau from './components/Tableau';

dotenv.config();

Tableau.init().then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
