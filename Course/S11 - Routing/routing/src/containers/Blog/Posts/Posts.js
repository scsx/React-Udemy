import React, { Component } from "react";
import myAxiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        myAxiosInstance
            .get("/posts")
            .then((response) => {
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
                    };
                });
                this.setState({ posts: updatedPosts });
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        let postsJSX = (
            <p className="text-light bg-danger">
                There was an error getting posts!
            </p>
        );
        if (!this.state.error) {
            postsJSX = this.state.posts.map((post) => {
                return (
                    <li className="list-group-item" key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </li>
                );
            });
        }
        return (
            <section className="allposts">
                <ul className="posts list-group">{postsJSX}</ul>
            </section>
        );
    }
}

export default Posts;
