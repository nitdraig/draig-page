import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MyBook from "./components/mybook/MyBook";
import Page404 from "./components/404/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book" element={<MyBook />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
