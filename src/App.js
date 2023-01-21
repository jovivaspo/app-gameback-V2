import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Backlog from "./pages/Backlog";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import Videogame from "./pages/Videogame";
import NotFound from "./pages/NotFound";

const DOMAIN = process.env.REACT_APP_DOMAIN;

function App() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="app">
      <Router>
        <NavBar />
        {!user && <Home />}
        {user && (
          <Routes>
            <Route path={`${DOMAIN}/`} element={<Backlog />} />
            <Route path={`${DOMAIN}/edit/:id`} element={<Videogame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
