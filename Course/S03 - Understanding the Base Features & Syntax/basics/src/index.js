import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppFunctional from './AppFunctional';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><AppFunctional /></div>, document.getElementById('root'));
registerServiceWorker();
