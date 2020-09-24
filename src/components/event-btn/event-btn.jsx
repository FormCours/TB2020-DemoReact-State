import React, {Component} from 'react';

class EventBtn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Merci de ne pas utiliser le bouton'
        }
    }

    onAction = (event) => {

        this.setState({
            message: 'Boulet ! Il ne fallait pas cliquer ! :('
        });
    }

    render() {
        const {message} = this.state;

        return (
            <div>
                <h3>{message}</h3>
                <button onClick={this.onAction} >Ne pas cliquer ici !</button>
            </div>
        );
    }
}

export default EventBtn;