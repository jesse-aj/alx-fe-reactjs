
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search" ;
  

function App() {

 return ( 
      <div>
      
        <nav>
          <Link to="/">Search</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
  

 );
}

export default App;



