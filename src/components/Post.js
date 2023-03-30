import React from "react";
import "./styles/post.styles.css";

export const Post = ({ data }) => {
  return data.map((datum) => (
    <article className="post">
      <h1 className="postHead">{datum.heading}</h1>
      <p>{datum.content}</p>
    </article>
  ));
};
