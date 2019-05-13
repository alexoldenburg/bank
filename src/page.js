import { Header } from './header.js';
import { Banner } from './banner.js';
import { View } from './view.js';

import React, { Component } from 'react';

class Page extends Component {

    constructor( props ) {
        super( props );

        const page = window.location.hash.substr(1) || 'home';
        this.state = { page };

        this.changePage = this.changePage.bind( this );
    }

    changePage( page ) {
        this.setState({ page });
        return false;
    }

    render() {
        return (
            <div className="container">
                <Header page={this.state.page} changePage={this.changePage} />
                <Banner />
                <View page={this.state.page} />
            </div>
        );
    }
}
export { Page };
