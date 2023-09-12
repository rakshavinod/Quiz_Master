import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import Instructions from './Instructions';
import Questions from './Questions';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/questions" element={<Questions/>}/>
        </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));


      
