import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import People from './People';

class RecordTable extends Component {
    constructor() {
        super();
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];

        this.state = {
            users: this.people 
        };

        
    }
    
    componentWillReceiveProps(newProps) {
        if (this.props.sortBy !== newProps.sortBy) {
            switch(newProps.sortBy) {
            case 'dob':
                this.compareDob();
                break;
            case 'name':
                this.compareName();
                break;
            default: 
                return;
            }
        }
    }

    compareDob() {
        let newState = this.state.users.sort( (a, b) => {
            let bNums = a.dob.split('/');
            let birthInt = bNums[2] + bNums[0] + bNums[1];

            let bNums2 = b.dob.split('/');
            let birthInt2 = bNums2[2] + bNums2[0] + bNums2[1];
            
            return birthInt - birthInt2;
        });

        this.setState({useers: newState});
    }

    compareName() {
        let newState = this.state.users.sort( (a,b) => {
            let first = a.name.split(' ')[0];
            let firstB = b.name.split(' ')[0];

            return first > firstB ? 1 : -1;
        });
        
        this.setState({users: newState});
    }

    render() {
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                                <TableRow>
                                    {this.people.map( ppl => {
                                        return <People person={ppl}></People>;
                                    })}
                                </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
