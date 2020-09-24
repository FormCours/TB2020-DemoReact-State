import React, {Component} from 'react';

class DateDuJour extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: new Date()
        };
    }

    render() {
        const {today} = this.state;
        const options =  { year: 'numeric', month: 'long', day: 'numeric' };

        return (
        <p>Nous somme le {today.toLocaleString('fr-BE', options)}</p>
        );
    }
}

export default DateDuJour;