import Db from './../db.js';
import Transaction from './transaction.js';

import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    componentDidMount() {
        Db.fetch( 'account' ).then(
            ( data ) => {
                this.setState( data );
            }
        );

        Db.fetch( 'transactions' ).then(
            ( data ) => {
                this.setState({ 'transactions': data });
            }
        );
    }

    calculate( identifier, float = 0 ) {

        const
            splittedFloat = parseFloat( float ).toFixed( 2 ).split( '.' ),
            ids = { 'whole': 0, 'decimals': 1 };

        return splittedFloat[ ids[identifier] ];
    }

    render() {
        const items = (this.state.transactions || []).map( ( transaction, index ) =>
            <Transaction key={index} transaction={transaction} />
        );

        return (
            <div className="view">
                <div className="account">
                    <div className="title">rekeningen</div>
                    <ul className="overview">
                        <li>
                            <div className="left-pane">
                                <div className="type">{this.state.type}</div>
                                <div className="number">{this.state.number}</div>
                            </div>

                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">{this.calculate( 'whole', this.state.saldo )}</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">{this.calculate( 'decimals', this.state.saldo)}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="page">
                    <div className="title">Transacties</div>
                    <div className="info">
                        {items}
                    </div>
                </div>
            </div>
        );
    }
}
