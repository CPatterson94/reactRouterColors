import { Routes, Route } from "react-router-dom";
import Gray from "./components/gray";
import Blue from "./components/blue";
import Red from "./components/red";
import "./index.css";
import NavBar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello, This is React Router!</h1>
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path={"/"} element={<Gray />} />
            <Route path={"/blue"} element={<Blue />} />
            <Route path={"/red"} element={<Red />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
