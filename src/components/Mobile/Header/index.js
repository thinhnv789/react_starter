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
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;