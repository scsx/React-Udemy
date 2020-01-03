import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import noMatch from './components/NoMatch';

class App extends Component {

  render () {
    return (
      <div className="container App">
            <div className="row">
                <div className="col-4">
                    <h3>Steps</h3>
                    <ol>
                        <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
                        <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
                        <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of
                            "Courses" (without passing any data for now)</li>
                        <li>Pass the course ID to the "Course" page and output it there</li>
                        <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as
                            query params (you need to manually parse them though!)</li>
                        <li>Load the "Course" component as a nested component of "Courses"</li>
                        <li>Add a 404 error page and render it for any unknown routes</li>
                        <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
                    </ol>
                </div>
                <div className="col routes">
                    <BrowserRouter>
                        <React.Fragment>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link to="/courses" className="nav-link">Courses</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/users" className="nav-link">Users</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            
                            <Switch>
                                <Route path="/courses" component={ Courses } />
                                <Route path="/users" component={ Users } />
                                <Redirect from="/all-courses" to="/courses" />
                                <Route component={ noMatch } />
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
