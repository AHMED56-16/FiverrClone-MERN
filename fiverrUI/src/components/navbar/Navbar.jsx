import { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 

  const { pathname } = useLocation();

  // Scroll detection for navbar styling
  useEffect(() => {
    const isActive = () => setActive(window.scrollY > 0);
    window.addEventListener('scroll', isActive);
    return () => window.removeEventListener('scroll', isActive);
  }, []);

 
  const currentUser = {
    id: 1,
    username: 'Muhammad Ahmed Raza',
    isSeller: true,
  };

  return (
    <div className={`navbar ${active || pathname !== '/' ? 'active' : ''}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>

        {/* Main Links */}
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>

          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}

          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
                alt="user"
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">Gigs</Link>
                      <Link className="link" to="/add">Add New Gig</Link>
                    </>
                  )}
                  <Link className="link" to="/orders">Orders</Link>
                  <Link className="link" to="/messages">Messages</Link>
                  <Link className="link" to="/">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Burger Icon */}
        <div
          className={`burger ${active || pathname !== '/' ? 'dark' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Scroll-Activated Menu */}
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">Graphics & Design</Link>
            <Link className="link" to="/">Video & Animation</Link>
            <Link className="link" to="/">Writing & Translation</Link>
            <Link className="link" to="/">AI Services</Link>
            <Link className="link" to="/">Digital Marketing</Link>
            <Link className="link" to="/">Music & Audio</Link>
            <Link className="link" to="/">Programming & Tech</Link>
            <Link className="link" to="/">Business</Link>
            <Link className="link" to="/">Lifestyle</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
