import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    render() {
        // console.log('props', this.props);
        return (
        <div className="checkboxes">
            <Checkbox onClick={this.props.handleName}/>
            <label>Name</label>
            <Checkbox onClick={this.props.handleAge}/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;

