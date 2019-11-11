import React from 'react';

const Nav = () => {
    return (
        <header className="nav navbar-expand-sm" >
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar"> <span className="fa fa-align-right"> </span> </button>

            <ul className="collapse navbar-collapse justify-content-end p-2" id="navbar">
                <li className="nav-link"> <a href="#"> <i className="fa fa-plus-circle" aria-hidden="true"></i></a></li>
                <li className="nav-link"> <a href="#"> <i className="fa fa-bell" aria-hidden="true"></i> </a></li>
                <li className="nav-link"> <a href="#"><i className="fa fa-bars" aria-hidden="true" style={{transform: "rotateZ(-45deg)"}}></i></a></li>
            </ul>
        </header>
    )
};
export default Nav;
