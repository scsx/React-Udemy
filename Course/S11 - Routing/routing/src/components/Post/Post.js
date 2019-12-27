import React from 'react';

const post = (props) => (
    <li className="card post" onClick={props.clicked}>
        <div className="card-body">
            <h5 className="card-title author">{props.title}</h5>
            <div className="info">
                <div className="author">{props.author}</div>
            </div>
        </div>
    </li>
);

export default post;