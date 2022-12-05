import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Docs from "./Components/Docs";
import Showcase from "./Components/Showcase";

const App = () => {
  return (
    <div className="bg-[#131416] h-screen">
      <BrowserRouter>
        <nav className="justify-center pt-5 gap-x-8 flex">
          <Link className="text-white" to="/">Home</Link>
          <Link className="text-white" to="/docs">Docs</Link>
          <Link className="text-white" to="/showcase">ShowCase</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
