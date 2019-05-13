import React, { Component } from 'react';

class ViewFactory extends Component {

    constructor( props ) {
        super( props );

        this.state = { loading: false, view: null, viewName: null, shouldLoad: true };
        this.loadView = this.loadView.bind( this );
    }

    loadView() {

        console.log( '11111111::', this.props.view );
        this.setState({ loading: true });
        import( './views/' + this.props.view + '.js' ).then(
            (e, r) => {
                this.setState({
                    view: e.default,
                    loading: false,
                    viewName: this.props.view,
                    shouldLoad: false
                });
            }
        );
    }

    componentDidMount() {
        console.log( '3333333::', this.props.view );
        return this.state.shouldLoad ? this.loadView() : false;
    }

    render() {

        console.log( '22222222::', this.props.view );
        return (
            ( !this.state.loading && this.state.view )
                ? new this.state.view().render()
                : 'Loading...'
        );
    }
}
export { ViewFactory };
