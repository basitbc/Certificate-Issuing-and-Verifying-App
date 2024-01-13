import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Update the activeLink state when the location changes
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">

          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-indigo-600">CERTIFICATE GENERATOR</Link>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <Link
              to="/"
              className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded  ${activeLink === '/' ?'text-white bg-indigo-600'  : ''}`}
            >
              Generate Certificate
            </Link>
            <Link
              to="/verify-certificate"
              className={`p-2 lg:px-4 md:mx-2  rounded   ${activeLink === '/verify-certificate' ? 'text-white bg-indigo-600' : ''}`}
            >
              Verify Certificate
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
