import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submited: false
    }

    componentDidMount() {
        console.log(this.props.location.hash);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios
            .post('/posts', data)
            .then(response => {
                console.log(response);
                this.props.history.replace('/posts');
                // this.setState({ submited: true });
            });
    }

    render() {

        let redirect = null;
        if (this.state.submited) {
            redirect = <Redirect to="/posts"/>;
        }

        return (
            <div className="newpost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                <textarea
                    rows="4"
                    className="form-control"
                    value={this.state.content}
                    onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Author</label>
                <select
                    value={this.state.author}
                    className="form-control"
                    onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button className="btn btn-success" onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;