import Db from './../db.js';

import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );

        this.state = {};

        this.change = this.change.bind( this );
        this.saveData = this.saveData.bind( this );
    }

    calculate( identifier, float = 0 ) {

        const
            splittedFloat = parseFloat( float ).toFixed( 2 ).split( '.' ),
            ids = { 'whole': 0, 'decimals': 1 };

        return splittedFloat[ ids[identifier] ];
    }

    change (identifier ) {
        return  ( e ) => {
            const value = (
                e.currentTarget.getAttribute( 'type' ) === 'checkbox'
            ) ? e.currentTarget.checked : e.currentTarget.value;
            const changeData = { [identifier] : value };
            this.setState( changeData );
        }
    }

    saveData(e) {
        e.preventDefault();

        this.state.date = [
            this.state['execution.day'],
            this.state['execution.month'],
            this.state['execution.year'],
        ].join( '-' );

        const {
            cumilative = 0,
            urgent = false,
            date = null,
            to = null,
            name = null,
            action = "substract",
        } = this.state;

        Db.addTo( 'transactions', { cumilative, urgent, date, to, name, action });
    }

    componentDidMount() {
        Db.fetch( 'account' ).then(
            ( data ) => {
                this.setState( data );
            }
        );
    }

    render() {
        return (
            <div className="view">
                <div className="account">
                    <div className="title">betalen</div>
                    <ul className="overview">
                        <li>
                            <div className="left-pane">
                                <div className="type">{this.state.type}</div>
                                <div className="number">{this.state.number}</div>
                            </div>

                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">{this.calculate( 'whole', this.state.saldo)}</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">{this.calculate( 'decimals', this.state.saldo)}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="page">
                    <div className="title">Betaalopdracht</div>
                    <div className="info">
                        <form onSubmit={this.saveData}>
                            <label>
                                <span className="name">Bedrag</span>
                                <input type="text" name="cumilative" onChange={this.change('cumilative')} />
                            </label>
                            <label>
                                <span className="name">Spoed</span>
                                <div className="fullWidth">
                                    <input type="checkbox" name="urgent" onChange={this.change('urgent')} />
                                </div>
                            </label>
                            <label>
                                <span className="name">van rekening</span>
                                <select disabled="disabled">
                                    <option>123.154.56.123 (basisrekening)</option>
                                </select>
                            </label>
                            <label>&nbsp;</label>
                            <label>
                                <span className="name">Uitvoerdatum</span>
                                <div className="fullWidth executionDate">
                                    <input type="text" name="executionDay" onChange={this.change('execution.day')} />
                                    <input type="text" name="executionMonth" onChange={this.change('execution.month')} />
                                    <input type="text" name="executionYear" onChange={this.change('execution.year')} />
                                </div>
                            </label>
                            <label>&nbsp;</label>
                            <label>
                                <span className="name">Naar rek nr:</span>
                                <input type="text" name="to" onChange={this.change('to')} />
                            </label>
                            <label>
                                <span className="name">ten name van</span>
                                <input type="text" name="name" onChange={this.change('name')} />
                            </label>
                            <input type="submit" value="Verstuur" />
                            <div className="clearBoth" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
