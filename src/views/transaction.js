import Db from './../db.js';

import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );
    }

    calculate( identifier, float = 0 ) {

        const
            splittedFloat = parseFloat( float ).toFixed( 2 ).split( '.' ),
            ids = { 'whole': 0, 'decimals': 1 };

        return splittedFloat[ ids[identifier] ];
    }

    getValue( identifier ) {
        return this.props.transaction[ identifier ];
    }

    getActionValue( identifier ) {

        return ( this.getValue( identifier ).toLowerCase() === 'add' ) ? 'bij' : 'af';
    }

    render() {
        return (
            <div className="transaction">
                <div className="left-pane">
                    <div className="name">{this.getValue( 'name' )}</div>
                    <div className="date">{this.getValue( 'date' )}</div>
                </div>
                <div className="action-pane">
                    <div className="action substract">{this.getActionValue( 'action' )}</div>
                </div>
                <div className="right-pane">
                    <div className="cumilative">
                        <div className="whole">{this.calculate( 'whole', this.getValue('cumilative'))}</div>
                        <div className="seperator">,</div>
                        <div className="decimals">{this.calculate( 'decimals', this.getValue('cumilative'))}</div>
                    </div>
                </div>
            </div>
        );
    }
}
