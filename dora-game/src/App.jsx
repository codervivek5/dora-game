import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Registration from "./components/Registration";



function App() {

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  )
}

export default App
