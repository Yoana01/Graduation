import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import { GlobalStyle } from "./components/styleComponents/global.Style";
// import LogoImage from "./images/Logo.png";

import About from "./components/About";
import CaseStudy_Portfolio from "./components/CaseStudy_Portfolio";
import CaseStudy_Simac from "./components/CaseStudy_Simac";
import CaseStudy_InterWeek from "./components/CaseStudy_InterWeek";
import HomePage from'./components/Home';

function App() {
  return (
    <div className="App">
       <GlobalStyle />
      
       {/* <Logo src="./components/styleComponents/image.Style" /> */}
       <Routes>
        <Route path="/" element={<NavBar />}>
           <Route index element={<Projects />} /> 
           <Route path="/about"  element={<About />} /> 
           <Route path="/caseStudyPortfolio"  element={<CaseStudy_Portfolio />} /> 
           <Route path="/caseStudySimac"  element={<CaseStudy_Simac />} /> 
           <Route path="/caseStudyInterWeek"  element={<CaseStudy_InterWeek />} />
           <Route path="/home"  element={<HomePage />} /> 
         </Route>
      </Routes> 

    </div>
  );
}

export default App;