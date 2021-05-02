import React from 'react';

import '../Post/Recipe.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="body">{props.body}</div>
            <div className="ingredients">{props.ingredients}</div>
            <div className="guide">{props.guide}</div>
            {/* <div className="image">{props.image}</div> */}
        </div>
    </article>
);

export default post;