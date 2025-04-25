import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DonorRegistrationPage from "./components/DonarRegistractionPage";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import LearnMore from "./components/LearnMore";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/donate" element={<DonorRegistrationPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/LearnMore" element={<LearnMore/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;