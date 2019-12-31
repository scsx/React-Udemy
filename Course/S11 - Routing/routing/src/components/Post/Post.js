import React from 'react';
// import { withRouter } from 'react-router-dom';

const post = (props) => (
    <li className="card post" onClick={props.clicked}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="author">{props.author}</p>
        </div>
    </li>
);

export default post;
// use this to get the info from the nearest Route (history, match, etc):
// Example: https://www.notion.so/scsx/Routing-6953c6de7b6143d3a795464f6d6a7b50#cebcfeab2a034b33a1ac7090c24674ce
// export default withRouter(post);