import React, {Component} from 'react';
import {Route, Link, NavLink} from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {

        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" title="Go home">Home</Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                    title="Create new post">New post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" exact render={ () => <h1>Hey HTML</h1> } />*/}

                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/> {/*
                <section className="fullposts">
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section className="posts">
                    <NewPost/>
                </section>
                */}

                {/* Using NavLink: */}
                <footer>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/new-post">New post</NavLink>
                        </li>
                    </ul>
                </footer>
            </div>
        );
    }
}

export default Blog;