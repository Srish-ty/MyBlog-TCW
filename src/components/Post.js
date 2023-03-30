import React from "react";
import "./styles/post.styles.css";

export const Post = ({ d }) => {
  return (
    <article className="post" key={d.index}>
      <a to={d.route}>
        <h1 className="postHead" to={d.route}>
          {d.heading}
        </h1>
      </a>
      <p className="content">{d.content}</p>
    </article>
  );
};

export const PostContainer = () => {
  return <article className="post"></article>;
};

export const PostHead = () => {
  return <h1 className="postHead"></h1>;
};

export const Content = () => {
  return <p className="content"></p>;
};
