import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            // axios uses Promises; then() takes a function as arg that will run when the Promise resolves (data arrives)
            .then((response) => {
                // too many (100) posts, limit to 4 and get a fake author
                const posts = response.data.slice(0, 4);
                const randomAuthors = [
                    "Jan F.",
                    "Fred P.",
                    "Max A.",
                    "Leeane F.",
                    "Bia T."
                ];
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author:
                            randomAuthors[
                                Math.floor(Math.random() * randomAuthors.length)
                            ]
                        //author: "Max"
                    };
                });
                this.setState({ posts: updatedPosts });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        const postsJSX = this.state.posts.map((post) => {
            return (
                <Post
                    title={post.title}
                    author={post.author}
                    key={post.id}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            );
        });
        return (
            <div>
                <section className="container">
                    <div className="posts">{postsJSX}</div>
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
