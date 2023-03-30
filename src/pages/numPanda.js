import { Post } from "../components/Post";
import { Header } from "../components/Header.js";
import { Link } from "react-router-dom";

const d = {
  index: 1,
  heading: "My notes for Numpy & Pandas",
  content:
    "Many students came to me saying they want to get started in Data science or Machine Learning. But don't have any resources or are confused about where to start from. I'm sahring my notes for numpy which I made using notion. You can find them below:",
  iframe0: "https://notioniframe.com/notion/10kdmsnglay",
  iframe: "https://iframe.embednpages.com/WCLaXUQmihgM7BCL8Vsz",
  p1: "Or check the site out:",
  link: {
    url: "https://s1l1c0n.notion.site/s1l1c0n/Numpy-61f23224f9024026abdd82607982224e",
    text: "srishty's notion page for numpy notes",
  },
  p2: "And here are the notes for pandas :",
  ifra1: "https://notioniframe.com/notion/7t34anmi9pr",
  link1: {
    url: "https://s1l1c0n.notion.site/Pandas-0dfab677a7174dcaa0eb69ce700e41b8",
    text: "srishty's notion page for pandas notes",
  },
};

const NumPanda = () => {
  return (
    <>
      <Header />
      <Post d={d} />
    </>
  );
};
export default NumPanda;
