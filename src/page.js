import { Header } from './header.js';
import { Banner } from './banner.js';
import { View } from './view.js';

import React, { Component } from 'react';

class Page extends Component {

    constructor( props ) {
        super( props );

        const page = window.location.hash.substr(1) || 'home';
        this.state = { page, view: null };

        this.changePage = this.changePage.bind( this );
    }

    changePage( view ) {

        import( './views/' + view + '.js' ).then(
            (e, r) => {
                this.setState({
                    view: e.default,
                    page: view
                });
            }
        );
        return false;
    }

    componentDidMount() {
        this.changePage( this.state.page );
    }

    render() {
        return (
            <div className="container">
                <Header page={this.state.page} changePage={this.changePage} />
                <Banner />
                <View page={this.state.view} />
            </div>
        );
    }
}
export { Page };
