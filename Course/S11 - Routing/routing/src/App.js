import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="container">
                        <Blog/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
