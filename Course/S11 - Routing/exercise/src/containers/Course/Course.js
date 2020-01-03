import React, { Component } from 'react';

class Course extends Component {

    state = {
        courseTitle: ''
    }

    componentDidMount() {
        this.parseQuery();
    }

    componentDidUpdate() {
        this.parseQuery();
    }

    parseQuery() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        return (
            <div className="course">
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: <b>{this.props.match.params.courseId}</b></p>
            </div>
        );
    }
}

export default Course;