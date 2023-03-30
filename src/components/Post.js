import React from "react";
import "./styles/post.styles.css";

export const Post = ({ d }) => {
  return (
    <article className="post" key={d.index}>
      <h1 className="postHead">{d.heading}</h1>
      <p className="content">{d.content}</p>
    </article>
  );
};
