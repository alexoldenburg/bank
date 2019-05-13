import React, { Component } from 'react';

class Header extends Component {

    constructor( props ) {
        super( props );

        this.navigate = this.navigate.bind( this );
    }

    navigate ( e ) {
        return this.props.changePage( e.currentTarget.dataset.page );
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <ul className="menu">
                    <li><a href="#home" data-page="home" onClick={this.navigate}>home</a></li>
                    <li><a href="#overview" data-page="overview" onClick={this.navigate}>overzicht</a></li>
                    <li><a href="#pay" data-page="pay" onClick={this.navigate}>betalen</a></li>
                </ul>
            </div>
        );
    }
}
export { Header };
