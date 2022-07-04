import React from "react";
import '../App.css';

const NavBarButton = ({ title, section }) => {
    return (
        <a href={`#${section}`}>
            <div className='navBarButton'>
                <p className='navBarText'>{title}</p>
            </div>
        </a>
    );
}

export default NavBarButton;