import React, { Component } from 'react';

export default class extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="view">
                <div className="account">
                    <div className="title">rekeningen</div>
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
                    <div className="title">Transacties</div>
                    <div className="info">
                        <div className="transaction">
                            <div className="left-pane">
                                <div className="name">J. Huting</div>
                                <div className="date">12 - 05 -2015</div>
                            </div>
                            <div className="action-pane">
                                <div className="action substract">af</div>
                            </div>
                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">700</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">00</div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction">
                            <div className="left-pane">
                                <div className="name">J. Huting</div>
                                <div className="date">12 - 05 -2015</div>
                            </div>
                            <div className="action-pane">
                                <div className="action add">bij</div>
                            </div>
                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">700</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">00</div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction">
                            <div className="left-pane">
                                <div className="name">J. Huting</div>
                                <div className="date">12 - 05 -2015</div>
                            </div>
                            <div className="action-pane">
                                <div className="action substract">af</div>
                            </div>
                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">12</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">00</div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction">
                            <div className="left-pane">
                                <div className="name">J. Huting</div>
                                <div className="date">12 - 05 -2015</div>
                            </div>
                            <div className="action-pane">
                                <div className="action substract">af</div>
                            </div>
                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">113</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">00</div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction">
                            <div className="left-pane">
                                <div className="name">J. Huting</div>
                                <div className="date">12 - 05 -2015</div>
                            </div>
                            <div className="action-pane">
                                <div className="action substract">af</div>
                            </div>
                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">1143</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">50</div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction">
                            <div className="left-pane">
                                <div className="name">J. Huting</div>
                                <div className="date">12 - 05 -2015</div>
                            </div>
                            <div className="action-pane">
                                <div className="action add">bij</div>
                            </div>
                            <div className="right-pane">
                                <div className="cumilative">
                                    <div className="whole">700</div>
                                    <div className="seperator">,</div>
                                    <div className="decimals">00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
