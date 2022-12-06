import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Docs from "./Components/Docs";
import Blog from './Components/Blog';

const App = () => {
  return (
    <div className="min-h-screen bg-[#131416]">
      <BrowserRouter>
        <nav className="flex fixed justify-center gap-8 backdrop-blur-xl w-full z-40 py-5 bg-[#17171a90]">
          <Link className="text-[#fbe1cc]" to="/"><FontAwesomeIcon icon={faCoffee} /></Link>
          <Link className="text-gray-400" to="/docs">Docs</Link>
          <Link className="text-gray-400" to="/blog">Blog</Link>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
