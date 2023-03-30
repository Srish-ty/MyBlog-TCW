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

        {d.iframe && <iframe className="ifra" src={d.iframe}></iframe>}
        <p className="content">{d.p1}</p>
        <a className="alink" href={d.link.url}>
          {d.link.text}
        </a>

        <p className="content">{d.p2}</p>
        {d.ifra1 && <iframe className="ifra" src={d.ifra1}></iframe>}
        <a className="alink" href={d.link1.url}>
          {d.link1.text}
        </a>
        <Link className="links" to={d.route}>
          {d.cap}
        </Link>
      </article>
    </div>
  );
  console.log(d.route);
};

/*










sfd
sd
s
d
s
*/

export const PostContainer = () => {
  return <article className="post"></article>;
};

export const PostHead = () => {
  return <h1 className="postHead"></h1>;
};

export const Content = () => {
  return <p className="content"></p>;
};
