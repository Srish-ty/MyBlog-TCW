import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/post.styles.css";

export const Post = ({ d }) => {
  return (
    <article className="post" key={d.index}>
      <Link to={d.route}>
        <h1 className="postHead" to={d.route}>
          {d.heading}
        </h1>
      </Link>
      <p className="content">{d.content}</p>
    </article>
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
