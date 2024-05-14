import { Routes, Route, Link } from "react-router-dom";
import { Gray } from "./components/gray";
import { Blue } from "./components/blue";
import { Red } from "./components/red";
import "./index.css";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/" />
          <Link to="/Blue" />
          <Link to="/Red" />
        </div>
        <div id="main-section">
          <Routes>
            <Route path={"/"} element={<Gray />} />
            <Route path={"/blue"} element={<Blue />} />
            <Route path={"/red"} element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
