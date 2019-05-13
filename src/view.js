import { ViewFactory } from './viewfactory.js';

import React, { Component } from 'react';

class View extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        console.log( 'state::', this.props );
        return (
            <div className="view">
                <ViewFactory view={this.props.page} />
            </div>
        );
    }
}
export { View };
