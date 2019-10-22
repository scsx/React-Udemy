import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Exercise from './Exercise';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <App />
            </div>
            <div className="col">
                <Exercise />
            </div>
        </div>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
