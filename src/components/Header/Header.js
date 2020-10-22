import React from 'react';

import './Header.css';

const Header = () => {
    return(
        <header>
            <span className="Logo">Logo</span>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Fruits</li>
                    <li className="noBroder">Vegies</li>
                </ul>
            </nav>
            <div className="User">User</div>
        </header>

    );
}

export default Header;