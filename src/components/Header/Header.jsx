import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ic_header_logo, } from '../../utils/svg';
import './Header.css';
import { callplus, downarrow } from '../../utils/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menuKey) => {
    setOpenDropdown(openDropdown === menuKey ? null : menuKey);
  };

  // JSON data defined directly here
  const menuData = [
    {
      key: 'page',
      name: 'Page',
      items: [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Services2', path: '/services2' },
        { name: 'Service Details', path: '/servicesdetails' },
        { name: 'Team', path: '/team' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: '404 Page', path: '/404Page' },
      ],
    },
    {
      key: 'portfolio',
      name: 'Portfolio',
      items: [
        { name: 'Portfolios', path: '/portfolios' },
        { name: 'Portfolios2', path: '/portfolios2' },
        { name: 'Single Portfolio', path: '/singleportfolio' },
      ],
    },
    {
      key: 'blogs',
      name: 'Blogs',
      items: [
        { name: 'Blogs', path: '/blogs' },
        { name: 'Blogs 2', path: '/blogs2' },
        { name: 'Single Post', path: '/singlepost' },
        { name: 'Single Post Creative', path: '/singlepostcreative' },
      ],
    },
  ];

  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">{ic_header_logo.icon()}</Link>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><Link className="navbar-list" to="/">Home</Link></li>

            {menuData.map((menu) => (
              <li key={menu.key}>
                <span className="navbar-dropdown navbar-list">{menu.name}</span>
                <ul className="sub-menu">
                  {menu.items.map((item, index) => (
                    <li key={index}>
                      <Link className="pages" to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li><Link className="navbar-list" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Burger Icon */}
        <div className="burger-icon" onClick={() => setIsMenuOpen(true)}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        {/* Call Us Section */}
        <div className="menubar">
          <div className="svgcolor">
            <img src={callplus} alt="Call Icon" className="call-icon" />
          </div>
          <div className="menulist">
            <h2 className="calltext">Call us Phone</h2>
            <span className="phonenumber">(808) 555-0111</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={() => setIsMenuOpen(false)}>×</div>
        <ul className="mobile-nav-list">
          {/* <li><Link to="/" className="mobile-nav-item">Home</Link></li> */}
          <li>
            <Link to="/" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>

          {/* {menuData.map((menu) => (
            <li key={menu.key}>
              <div className="mobile-dropdown" onClick={() => toggleDropdown(menu.key)}>
                <span>{menu.name}</span>
                <span className={`arrow-icon ${openDropdown === menu.key ? 'rotate' : ''}`}>
                  <img className="down-aerrow" src={downarrow} />
                </span>
              </div>
              <ul className={`sub-menu ${openDropdown === menu.key ? 'open' : ''}`}>
                {menu.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))} */}

          {menuData.map((menu) => (
    <li key={menu.key}>
      <div className="mobile-dropdown" onClick={() => toggleDropdown(menu.key)}>
        <span>{menu.name}</span>
        <span className={`arrow-icon ${openDropdown === menu.key ? 'rotate' : ''}`}>
          <img className="down-aerrow" src={downarrow} />
        </span>
      </div>
      <ul className={`sub-menu ${openDropdown === menu.key ? 'open' : ''}`}>
        {menu.items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  ))}
          {/* <li><Link to="/contact" className="mobile-nav-item">Contact</Link></li> */}
          <li>
    <Link to="/contact" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>Contact</Link>
  </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
