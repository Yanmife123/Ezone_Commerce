import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/AppContext.jsx";
import { NavBar, Footer } from "./components";

import RouteComponent from "./routes/routes";

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="w-full overflow-hidden relative">
          <header className="flex__center paddingX py-3 pt-5 relative border-b-1 border-b-grey">
            <div className="boxWidth">
              <NavBar />
            </div>
          </header>
          <div>
            <RouteComponent />
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
