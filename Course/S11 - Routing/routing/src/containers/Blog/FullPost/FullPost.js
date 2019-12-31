import React, {Component} from 'react';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    
    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios
                    .get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                        console.log(response);
                    });
            }
        }
    }

    componentDidMount() {        
        this.loadData();
    }

    componentDidUpdate() {        
        this.loadData();
    }

    deletePostHandler = () => {
        axios
            .delete('/posts/' + this.props.id)
            .then(response => {
                //console.log(response);
            });
    }

    render() {
        let post = <p className='bg-info'>Please select a Post!</p>;
        if (this.props.id) {
            post = <p className='bg-info'>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="fullpost card">
                    <div className="card-body">
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                        <div className="Edit">
                            <button onClick={this.deletePostHandler} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;