import React from "react";

const post = (props) => (
    <article className="post" onClick={props.clicked}>
        <div className="card">
            <div className="card-body info">
                <h5 className="card-title author">{props.author}</h5>
                <p className="card-text">{props.title}</p>
            </div>
        </div>
    </article>
);

export default post;
