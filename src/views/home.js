import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="view">
                <div className="account">
                    <div className="title">eigen gegevens</div>
                    <ul className="overview">
                        <li>
                            <div className="type">Basisrekening</div>
                            <div className="number">123.154.56.123</div>
                        </li>
                    </ul>
                </div>
                <div className="page">
                    <div className="title">rekening gegevens</div>
                    <div className="info">
                        <form>
                            <label>
                                <span className="name">Voorletters</span>
                                <input type="text" name="initials" />
                            </label>
                            <label>
                                <span className="name">Achternaam</span>
                                <input type="text" name="familyname" />
                            </label>
                            <label>
                                <span className="name">Email</span>
                                <input type="email" name="email" />
                            </label>
                            <label>&nbsp;</label>
                            <label>
                                <span className="name">Straat + nr</span>
                                <input type="text" name="housenumber" className="share-small" />
                                <input type="text" name="streetname" className="share-large" />
                            </label>
                            <label>
                                <span className="name">Plaats</span>
                                <input type="text" name="city" />
                            </label>
                            <label>
                                <span className="name">Postcode</span>
                                <input type="text" name="postalcode" />
                            </label>
                            <label>
                                <span className="name">Telefoon</span>
                                <input type="text" name="telephone" />
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
