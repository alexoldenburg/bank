class Db {

    constructor() {
        this.data = {};
        this.changes = {};
    }

    fetch( uri ) {
        if ( !this.data[uri] ) {
            return this.data[uri] = import( './../mock/' + uri + '.js' ).then(
                ( data ) => {
                    if (this.changes[ uri ]) {

                        if (Array.isArray( data.default )) {
                            return data.default.concat( this.changes[ uri ]);
                        }
                        return Object.assign(data.default, this.changes[ uri ]);
                    }
                    return data.default;
                }
            );
        }
        return this.data[ uri ];
    }

    save( uri, data ) {
        this.changes[ uri ] = Object.assign( {}, this.changes[ uri ], data );
        this.data[ uri ] = false;
    }

    addTo( uri, data ) {
        this.changes[ uri ] = data;
        this.data[ uri ] = false;
    }

};
export default new Db();
