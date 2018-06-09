import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.navItems = [
            {
                link: '/',
                name: 'Home'
            },
            {
                link: '/about',
                name: 'About'
            }
        ];
    }

    render() {
        return (
            <header className="header-desktop">
                <div className="container">
                    {/* <a href="/">Test</a> */}
                    <nav>
                        <ul>
                            {
                                this.navItems.map((item, index) => {
                                    return (
                                        <li key={index} className={`nav-item${(this.props.location.pathname === item.link) ? ' active' : ''}`}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);