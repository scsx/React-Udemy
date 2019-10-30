import React, { Component } from "react";
import Axios from "axios";

class NewPost extends Component {
    state = {
        title: "",
        content: "",
        author: "Max"
    };

    postDataHandler = () => {
        const dataToSend = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        };
        // 1 URL, 2 Data (axios will stringify it), 3 Optional (config?)
        Axios.post("/posts", dataToSend).then((response) => {
            console.log(response);
        });
    };

    render() {
        return (
            <div className="container newpost">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title author text-center">
                            Add a Post
                        </h2>
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={(event) =>
                                this.setState({ title: event.target.value })
                            }
                        />
                        <label>Content</label>
                        <textarea
                            rows="4"
                            className="form-control"
                            value={this.state.content}
                            onChange={(event) =>
                                this.setState({ content: event.target.value })
                            }
                        />
                        <label>Author</label>
                        <select
                            value={this.state.author}
                            className="form-control"
                            onChange={(event) =>
                                this.setState({ author: event.target.value })
                            }>
                            <option value="Max">Max</option>
                            <option value="Manu">Manu</option>
                        </select>
                        <div className="text-center">
                            <button
                                className="btn btn-success mt-3"
                                onClick={this.postDataHandler}>
                                Add post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost;
