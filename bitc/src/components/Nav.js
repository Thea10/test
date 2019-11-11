import React from 'react';

const Nav = () => {
    return (
        <header className="nav " >
           <div className="menu-icon">  <span></span> <span></span><span></span><span></span> </div>
            <ul className="navbar-collapse justify-content-end p-2" id="navbar">
                <li className="nav-link"> <a href="#"> <i className="fa fa-line-chart" aria-hidden="true"></i></a></li>
                <li className="nav-link"> <a href="#"> <i className="fa fa-bell" aria-hidden="true"></i> </a></li>
            </ul>
        </header>
    )
};
export default Nav;
