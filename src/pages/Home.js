import { Post } from "../components/Post";
import { Header } from "../components/Header";

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
    heading: "2. Adding JavaScript",
    content:
      "The tag which should be used to add JavaScript in your webpage is <script> </script> You can add script anywhere in <head> or <body>",
  },
  {
    index: 3,
    heading: "Learn PHP",
    content: "whoa",
  },
  {
    index: 4,
    heading: "Learn PHP",
    content:
      "In php, we use built-in PHP function “echo” to output the text. php statements end with (;) semicolon. any keyword, class or function in php is case sensitive. so any of the following methods outputs the same ‘hello World!’",
  },
  {
    index: 5,
    heading: "1. Python",
    content:
      "It is used for: web development (server-side), software development, mathematics, system scripting. What can Python do? Python can be used on a server to create web applications. Python can be used alongside software to create workflows. Python can connect to database systems. It can also read and modify files. Python can be used to handle…",
  },

  {
    index: 6,
    heading: "Deep Learning and Feature Engineering",
    content:
      "Feature Engineering : It is basically machine learning technique for creating features based on the raw data given. It refers to transforming & training data and augmenting it with additional, more useful features to make ML more effective. For example, let’s take take a dataset where we have two variables. call-time and calling-rate. It’s always…",
    route: "/Loremipsum",
  },
  {
    index: 7,
    heading: "Inline conditional rendering in React.js",
    content:
      "Recently, the new documentation of react has been released, which you can find on React.dev site . That’s what made me write about this short post. If you’ve just started learning React, you must have come across a syntax, which looks something like this: That’s basically used as short-hand for the following code: You must…",
    route: "/conditionalrendering",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="post_container">
        {data.map((datum) => (
          <Post d={datum} />
        ))}
      </div>
    </>
  );
};

export default Home;
