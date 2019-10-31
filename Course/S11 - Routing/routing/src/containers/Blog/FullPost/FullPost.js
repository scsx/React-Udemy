import React, { Component } from "react";
import axios from "axios";

class FullPost extends Component {
    state = {
        loadedPost: null
    };
    componentDidUpdate() {
        // To prevent infinite loop (setState will change the component and call recursivelly componentDidUpdate, where we're at)
        // 1 we hanve an ID
        if (this.props.id) {
            // 2 call only if ( post is null || (we have a post && post is different from a new one we just got) )
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                    this.state.loadedPost.id !== this.props.id)
            ) {
                axios.get("/posts/" + this.props.id).then((res) => {
                    console.log(res);
                    this.setState({ loadedPost: res.data });
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.id).then((res) => {
            console.log(res);
            console.log(
                "https://jsonplaceholder.typicode.com/posts/1 aceita delete, status: ok"
            );
            // this.setState({ loadedPost: res.data });
        });
    };

    render() {
        // 1 we don't have an ID
        let post = <p className="text-center">Please select a Post!</p>;
        // 2 we have an ID but no state (axios.get() is asynchronous)
        if (this.props.id) {
            post = <p className="text-center">Loading...</p>;
        }
        // 3 we have state updated
        if (this.state.loadedPost) {
            post = (
                <div>
                    <h4 className="card-title author">
                        {this.state.loadedPost.title}
                        <div className="edit d-inline ml-3">
                            <button
                                type="button"
                                onClick={this.deletePostHandler}
                                className="btn btn-outline-danger btn-sm">
                                Delete
                            </button>
                        </div>
                    </h4>
                    <p className="card-text">{this.state.loadedPost.body}</p>
                </div>
            );
        }
        post = (
            <div className="container fullpost">
                <div className="card">
                    <div className="card-body">{post}</div>
                </div>
            </div>
        );
        return post;
    }
}

export default FullPost;
