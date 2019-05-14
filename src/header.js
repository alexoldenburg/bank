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
        console.log( this.props.page );
        return (
            <div className="header">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <ul className="menu">
                    <li className={ this.props.page === 'home' ? 'active' : '' }><a href="#home" data-page="home" onClick={this.navigate}>home</a></li>
                    <li className={ this.props.page === 'overview' ? 'active' : '' }><a href="#overview" data-page="overview" onClick={this.navigate}>overzicht</a></li>
                    <li className={ this.props.page === 'pay' ? 'active' : '' }><a href="#pay" data-page="pay" onClick={this.navigate}>betalen</a></li>
                </ul>
            </div>
        );
    }
}
export { Header };
