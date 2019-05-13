import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="view">
                <div className="account">
                    <div className="title">betalen</div>
                    <ul className="overview">
                        <li>
                            <div className="left-pane">
                                <div className="type">Basisrekening</div>
                                <div className="number">123.154.56.123</div>
                            </div>

                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">120</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">24</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="page">
                    <div className="title">Betaalopdracht</div>
                    <div className="info">
                        <form>
                            <label>
                                <span className="name">Bedrag</span>
                                <input type="text" name="amount" />
                            </label>
                            <label>
                                <span className="name">Spoed</span>
                                <div className="fullWidth">
                                    <input type="checkbox" name="urgent" />
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
                                <span className="name">Uitvoordatum</span>
                                <div className="fullWidth executionDate">
                                    <input type="text" name="executionYear" />
                                    <input type="text" name="executionMonth" />
                                    <input type="text" name="executionDay" />
                                </div>
                            </label>
                            <label>&nbsp;</label>
                            <label>
                                <span className="name">Naar rek nr:</span>
                                <input type="text" name="to" />
                            </label>
                            <label>
                                <span className="name">ten name van</span>
                                <input type="text" name="toName" />
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
