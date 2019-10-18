import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Exercise from './Exercise';
import AppFunctional from './AppFunctional';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="container-fluid">
        <h1 className="doctitle">Theory</h1>
        <div className="row">
            <div className="col">
                <App />
            </div>
            <div className="col">
                <AppFunctional />
            </div>
        </div>
        <h1 className="doctitle">Exercise</h1>
        <Exercise />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
