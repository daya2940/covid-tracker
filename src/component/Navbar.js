import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { sidebarData } from '../data/sidebarData';

const Navbar = ({handler}) => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={() => handler(index)}>
                <Link to={item.path}>
                  {item.icon}<span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
