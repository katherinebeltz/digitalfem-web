import "./App.css";
// importing components from react-router-dom package
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  
// import Home component
import Home from "./Home.js";
// import About component
import Company from "./Company.js";


function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/company/:id" element={<Company />} />
            
            
          
        </Routes>
      </Router>
    </>
  );
}
  
export default App;
