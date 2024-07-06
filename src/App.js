import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Footer from './components/Footer';
import './App.css';

// pages
import Home from './pages/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <NavLink to="/aingthawan" exact>
            Home
          </NavLink>
          <NavLink to="/portfolio">
            Works
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aingthawan" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const NavLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} {...props}>
      {children}
    </Link>
  );
};

export default App;
