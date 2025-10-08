
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search" ;
import "./index.css"
  

function App() {

 return ( 

 <div>
        <nav>
          <Link to="/" className="text-blue-500 ">Search</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
  

 );
}

export default App;



