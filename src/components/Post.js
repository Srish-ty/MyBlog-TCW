import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

import "./styles/post.styles.css";

export const Post = ({ d }) => {
  return (
    <div className="post_container">
      <article className="post" key={d.index}>
        <Link className="links" to={d.route}>
          <h1 className="postHead">{d.heading}</h1>
        </Link>
        <p className="content">{d.content}</p>
        <Link className="links" to={d.route}>
          {d.cap}
        </Link>
      </article>
    </div>
  );
  console.log(d.route);
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
