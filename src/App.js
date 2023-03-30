import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Page2name from "./pages/page2";
import Pagename from "./pages/template";
import Home from "./pages/Home";
import Numpanda from "./pages/numPanda";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="conditionalrendering" element={<Pagename />} />
        <Route path="Loremipsum" element={<Page2name />} />
        <Route path="Numpy-and-pandas" element={<Numpanda />} />
      </Routes>
    </Router>
  );
}
