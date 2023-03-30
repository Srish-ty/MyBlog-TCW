import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import Page2name from "./pages/page2";
import Pagename from "./pages/template";
import Home from "./pages/Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="conditionalrendering" element={<Pagename />} />
          <Route path="Loremipsum" element={<Page2name />} />
        </Route>
      </Routes>
    </Router>
  );
}
