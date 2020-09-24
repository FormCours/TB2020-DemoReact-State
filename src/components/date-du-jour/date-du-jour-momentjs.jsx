import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/fr';

class DateDuJour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // today:  moment().format("D MMMM YYYY")
            today:  moment().format("LL")
        };
    }

    render() {
        const {today} = this.state;

        return (
        <p>Nous somme le {today}</p>
        );
    }
}

export default DateDuJour;