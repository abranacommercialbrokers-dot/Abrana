import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Connection from './Connection/Connection';
import InsCon from "./nav1/insCon"; // ✅ Capitalized component import
import TravCon from './Nav2/travCon';
import ConsConn from './nav3/ConsConn';
import Econ from './nav4/Econ';
import ServicesInquiryForm from './ServicesInquiryForm/ServicesInquiryForm';
import ContactPage from './ContactPage/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/ins" element={<InsCon />} /> {/* ✅ Capitalized component */}
        <Route path="t" element={<TravCon/>} />
        <Route path="c" element={<ConsConn/>} />
        <Route path="e" element={<Econ/>} />
        <Route path="b" element={<ServicesInquiryForm/>} />
        <Route path="con" element={<ContactPage/>} />
        
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;