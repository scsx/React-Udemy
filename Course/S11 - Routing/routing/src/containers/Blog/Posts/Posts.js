import React, {Component} from "react";
import myAxiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import { Link, Route } from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
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
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({ pathname: '/posts/' + id });
        this.props.history.push('/posts/' + id); // just string
    }

    render() {

        let posts = <p className="bg-danger">Something went wrong!</p>;
        if (!this.state.error) {
            posts = this
                .state
                .posts
                .map(post => {
                    return (
                        // navigating by link
                        /*
                        <Link to={'/' + post.id} key={post.id}>
                            <Post
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}/>
                        </Link>
                        */
                        // navigating programmatically, using postSelectedHandler
                        <Post   
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    );
                });
        }

        return (
            <div>
                <ul className="posts">
                    {posts}
                </ul>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
            
        );
    }
}

export default Posts;