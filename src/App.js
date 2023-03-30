import { Post } from "./components/Post";
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
];
export default function App() {
  return (
    <div className="post_container">
      <Post data={data} />
    </div>
  );
}
