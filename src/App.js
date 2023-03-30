import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./styles.css";

const data = [
  {
    index: 0,
    heading: "Welcome to my blog",
    content: "This is my first blog! Welcome to the journey",
  },
  {
    index: 1,
    heading: "hello 2nd post",
    content: "Static vs dynamically written languages",
  },
  {
    index: 2,
    heading: "Learn PHP",
    content: "whoa",
  },
  {
    index: 3,
    heading: "Learn PHP",
    content:
      "In php, we use built-in PHP function “echo” to output the text. php statements end with (;) semicolon. any keyword, class or function in php is case sensitive. so any of the following methods outputs the same ‘hello World!’",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <div className="post_container">
        <Post data={data} />
      </div>
    </>
  );
}
