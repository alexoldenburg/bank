import Loading from './views/loading.js';

import React, { Component } from 'react';

class View extends Component {

    constructor( props ) {
        super( props );
    }

    render() {

        const CurPage = this.props.page || Loading;
        return (
            <div className="view">
                <CurPage />
            </div>
        );
    }
}
export { View };
