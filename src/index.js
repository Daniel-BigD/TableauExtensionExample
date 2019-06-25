import dotenv from 'dotenv';
import './tableau-extensions-1.latest';
import 'core-js/es/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

dotenv.config();

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('root'));
