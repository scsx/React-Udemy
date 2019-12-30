import React, { Component } from "react";
import myAxiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        myAxiosInstance
            .get('/posts')
            .then(response => {
                const posts = response
                    .data
                    .slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {

        let posts = <p className="bg-danger">Something went wrong!</p>;
        if (!this.state.error) {
            posts = this
                .state
                .posts
                .map(post => {
                    return <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>;
                });
        }

        return (
            <ul className="posts">
                {posts}
            </ul>
        );
    }
}

export default Posts;