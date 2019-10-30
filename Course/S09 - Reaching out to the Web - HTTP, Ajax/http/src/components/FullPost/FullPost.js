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
                axios
                    .get(
                        "https://jsonplaceholder.typicode.com/posts/" +
                            this.props.id
                    )
                    .then((res) => {
                        console.log(res);
                        this.setState({ loadedPost: res.data });
                    });
            }
        }
    }

    render() {
        // 1 we don't have an ID
        let post = (
            <div className="card-body">
                <p>Please select a Post!</p>
            </div>
        );
        // 2 we have an ID but no state (axios.get() is asynchronous)
        if (this.props.id) {
            post = (
                <div className="card-body">
                    <p>Loading...</p>
                </div>
            );
        }
        // 3 we have state updated
        if (this.state.loadedPost) {
            post = (
                <div className="card-body">
                    <h2 className="card-title author">
                        {this.state.loadedPost.title}
                    </h2>
                    <p className="card-text">{this.state.loadedPost.body}</p>
                    <div className="edit">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            );
        }
        post = (
            <div className="container fullpost text-center">
                <div className="card">{post}</div>
            </div>
        );
        return post;
    }
}

export default FullPost;
