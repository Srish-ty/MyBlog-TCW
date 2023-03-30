import React from "react";
import "./styles/post.styles.css";

export const Post = ({ data }) => {
  return data.map((d) => (
    <article className="post" key={d.index}>
      <h1 className="postHead">{d.heading}</h1>
      <p>{d.content}</p>
    </article>
  ));
};
