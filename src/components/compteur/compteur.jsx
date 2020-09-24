import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Compteur extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    onIncrement = () => {
        this.setState((state, props) => ({
            value: state.value + props.increment
        }));
    }

    onReset = () => {
        this.setState({
            value: 0
        });
    }

    render() {
        const {value} = this.state;


        return (
            <>
                <h1>{value}</h1>
                <button onClick={this.onIncrement}>Incrementer</button>
                {value !== 0 && (
                    <button onClick={this.onReset} >Reset</button>
                )}
            </>
        );
    }
}

Compteur.defaultProps = {
    increment: 1
};

Compteur.propTypes = {
    increment: PropTypes.number
}

export default Compteur;