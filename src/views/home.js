import Db from './../db.js';

import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );
        this.state = {};

        this.change = this.change.bind( this );
        this.saveData = this.saveData.bind( this );
    }

    fill( identifier ) {
        return this.state[ identifier ] || "";
    }

    change (identifier ) {
        return  ( e ) => {
            const changeData = { [identifier] : e.currentTarget.value };
            this.setState(changeData);
        }
    }

    saveData(e) {
        e.preventDefault();

        Db.save( 'account', this.state );
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
                    <div className="title">eigen gegevens</div>
                    <ul className="overview">
                        <li>
                            <div className="type">{this.state.type}</div>
                            <div className="number">{this.state.number}</div>
                        </li>
                    </ul>
                </div>
                <div className="page">
                    <div className="title">rekening gegevens</div>
                    <div className="info">
                        <form onSubmit={this.saveData}>
                            <label>
                                <span className="name">Voorletters</span>
                                <input type="text" name="initials" onChange={this.change( 'name.initials' )} defaultValue={this.fill( 'name.initials' )} />
                            </label>
                            <label>
                                <span className="name">Achternaam</span>
                                <input type="text" name="familyname" onChange={this.change( 'name.familyname' )} defaultValue={this.fill( 'name.familyname' )} />
                            </label>
                            <label>
                                <span className="name">Email</span>
                                <input type="email" name="email" onChange={this.change( 'email' )} defaultValue={this.fill( 'email' )} />
                            </label>
                            <label>&nbsp;</label>
                            <label>
                                <span className="name">Straat + nr</span>
                                <input type="text" name="housenumber" className="share-small" onChange={this.change( 'housenumber' )} defaultValue={this.fill( 'housenumber' )} />
                                <input type="text" name="streetname" className="share-large" onChange={this.change( 'streetname' )} defaultValue={this.fill( 'streetname' )} />
                            </label>
                            <label>
                                <span className="name">Plaats</span>
                                <input type="text" name="city" onChange={this.change( 'city' )} defaultValue={this.fill( 'city' )} />
                            </label>
                            <label>
                                <span className="name">Postcode</span>
                                <input type="text" name="postalcode" onChange={this.change( 'postalcode' )} defaultValue={this.fill( 'postalcode' )} />
                            </label>
                            <label>
                                <span className="name">Telefoon</span>
                                <input type="text" name="telephone" onChange={this.change( 'telephone' )} defaultValue={this.fill( 'telephone' )} />
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
