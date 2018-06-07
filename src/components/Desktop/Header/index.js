import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    render() {
        return (
            <header className="header-desktop">
                <div className="container">
                    {/* <a href="/">Test</a> */}
                    <nav>
                        <ul>
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;