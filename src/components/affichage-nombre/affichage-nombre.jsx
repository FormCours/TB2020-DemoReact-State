import React, { Component } from 'react';

class AffichageNombre extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre : 42
        };
    }

    render() {
        const {nombre} = this.state;

        return (
            <h1>Le nombre est {nombre}</h1>
        );
    }
}

export default AffichageNombre;