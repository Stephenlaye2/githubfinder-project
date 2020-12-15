import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar =({title, icon}) => {
  
    return (
      <div className = "navbar bg-primary" >
        <div>
          <Link to = '/'>
        <i className = {icon} /> {title}
        </Link>
        </div>

        <ul>
          <li>
            <Link to = "/" >Home</Link>
          </li>
          <li>
            <Link to = "/about"  >
              About
            </Link>
          </li>
        </ul>
      </div>
    )
  }

Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github",
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
export default Navbar
