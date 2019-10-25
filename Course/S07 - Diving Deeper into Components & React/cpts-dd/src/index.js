import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col">
                <App appTitle="People manager" />
            </div>
            {/* <div className="col">

            </div> */}
        </div>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
