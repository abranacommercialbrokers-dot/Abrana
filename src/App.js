import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Connection from './Connection/Connection';
import InsCon from "./nav1/insCon";
import TravCon from './Nav2/travCon';
import ConsConn from './nav3/ConsConn';
import Econ from './nav4/Econ';
import ServicesInquiryForm from './ServicesInquiryForm/ServicesInquiryForm';
import ContactSection from './ContactSection/ContactSection';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      {/* 🔥 This fixes navbar overlapping */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/ins" element={<InsCon />} />
          <Route path="/t" element={<TravCon/>} />
          <Route path="/c" element={<ConsConn/>} />
          <Route path="/e" element={<Econ/>} />
          <Route path="/b" element={<ServicesInquiryForm/>} />
          <Route path="/con" element={<ContactSection/>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;