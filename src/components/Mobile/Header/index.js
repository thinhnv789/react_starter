import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navShow: false
        }
    }

    navToggle = () => {
        this.setState({
            navShow: !this.state.navShow
        })
    }

    render() {
        const { navShow } = this.state;
        const { navItems } = this.props;

        return (
            <header className="header-mobile">
                <div className="container">
                    {/* <a href="/">Test</a> */}
                    <div className="topbar">
                        <button className="hamburger" onClick={() => this.navToggle()}>
                            <i className="icon-hamburger"/>
                            <i className="icon-hamburger"/>
                            <i className="icon-hamburger"/>
                        </button>
                    </div>
                    <nav className={(navShow) ? 'nav-show' : 'nav-hidden'}>
                        <ul>
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <li key={index} className={`nav-item${(this.props.location.pathname === item.link) ? ' active' : ''}`}
                                            onClick={() => this.setState({navShow: false})}
                                        >
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

Header.defaultProps = {
    navItems: []
}

export default withRouter(Header);