import React, {Component} from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

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
                                <Link to="/posts" title="Go to posts">Posts</Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                    pathname: '/new-post',
                                    hash: '#example-hash',
                                    search: '?submit=yes-please'
                                }}
                                    title="Create new post">New post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" exact render={ () => <h1>Hey HTML</h1> } />*/}

                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    {/* Order matters because "new-post" could be interpreted as :id */}
                    {/* #moved to a nested route# <Route path="/:id" exact component={FullPost}/> */}
                </Switch>

                {/* Using NavLink: */}
                <footer>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active" to="/posts">Posts</NavLink>
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