import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../../containers/Blog/NewPost/NewPost";

class Blog extends Component {
    render() {
        return (
            <main className="container">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link className="btn btn-outline-light" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-outline-light"
                                    to="/new-post">
                                    New post
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-outline-light"
                                    to={{
                                        pathName: "/new-post",
                                        hash: "#someAnchor",
                                        search: "?term=cats"
                                    }}>
                                    New post
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Router>
                    <Route path="/" render={() => <h1>Home</h1>} />
                </Router> */}

                <div className="row">
                    <div className="col-sm-4">
                        <Route path="/" component={Posts} />
                    </div>
                    <div className="col-sm-8">
                        <Route path="/new-post" component={NewPost} />
                    </div>
                </div>
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </main>
        );
    }
}

export default Blog;
