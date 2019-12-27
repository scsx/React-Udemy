import React, {Component} from 'react';

import Posts from './Posts/Posts';

class Blog extends Component {

    render() {

        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New post</a></li>
                        </ul>
                    </nav>
                </header>
                
                {/*
                <section className="fullposts">
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section className="posts">
                    <NewPost/>
                </section>
                */}
                
            </div>
        );
    }
}

export default Blog;