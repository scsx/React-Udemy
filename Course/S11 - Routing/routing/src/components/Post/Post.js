import React from "react";

const post = (props) => (
    <article className="post" onClick={props.clicked}>
        <h5 className="card-title author">{props.author}</h5>
        <p className="card-text">{props.title}</p>
    </article>
);

export default post;
