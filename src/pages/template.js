import { Post, PostContainer, PostHead, Content } from "../components/Post";

const d = {
  index: 0,
  heading: "Inline conditional rendering in React.js",
  content:
    "Recently, the new documentation of react has been released, which you can find on React.dev site .<br/>That’s what made me write about this short post. If you’ve just started learning React, you must have come across a syntax, which looks something like this: <br/> return (<>{(unreadMsgs.length > 0) &&<h2>You have {unreadMsgs.length} unread messages.</h2></>); That’s basically used as short-hand for the following code: if(unreadMsgs.length > 0){ return()",
};
/*
const Pagename = () => {
  reutrn(<Post d={d} />);
};
*/
export const Pagename = () => {
  return (
    <PostContainer>
      <PostHead>{d.heading}</PostHead>
      <Content>{d.content}</Content>
    </PostContainer>
  );
};
export default Pagename;
