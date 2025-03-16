import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home, Login, Contact, About, SignUP } from "./pages";

function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <header className="flex__center paddingX py-3 pt-5 relative border-b-1 border-b-grey">
          <div className="boxWidth">
            <NavBar />
          </div>
        </header>
        <div>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<SignUP />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
