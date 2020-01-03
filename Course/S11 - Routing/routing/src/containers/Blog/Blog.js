import React, {Component} from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
// commented to do it lazy loading:
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    // special syntax "dynamic import"
    // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8138598
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

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
                    { this.state.auth ? <Route path="/new-post" component={ AsyncNewPost }/> : null }
                    <Route path="/posts" component={ Posts }/>
                    {/* Must be last! doesn't work with <Redirect from="/" */}
                    <Route render={ () => <h2 className="text-light bg-dark">404 Not found!</h2> }/>
                    {/* <Redirect from="/" to="/posts"/> */}
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