import React, {Component} from 'react';
import {usersJSON} from '../data';
import Person from './Person';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps(newProps) {
		if (this.props.sortBy !== newProps.sortBy) {
			switch(newProps.sortBy) {
			case 'age':
				this.compareByAge();
				break;
			case 'name':
				this.compareByName();
				break;
			case 'points':
				this.compareByPoints();
				break;
			case 'rank':
				this.compareByRank();
				break;
			default:
				return;
			}
		}
	}

    // complete the comparators
	compareByAge() {
		let newUsers = this.state.users.sort( (a,b) => {
			return a.age - b.age;
		});

		this.setState({users: newUsers});
	}

	compareByName(a, b) {
		let newUsers = this.state.users.sort( (a,b) => {
			let first = a.name.split(' ')[0];
			let first2 = b.name.split(' ')[0];
			return first > first2 ? 1: -1;
		});

		this.setState({users: newUsers});
	}

	compareByPoints(a, b) {
		let newUsers = this.state.users.sort((a, b) => {
			return a.points - b.points;
		});

		this.setState({users: newUsers});
	}

	compareByRank(a, b) {
		console.log('in rank')
		let newUsers = this.state.users.sort((a, b) => {
			return a.rank - b.rank;
		});

		this.setState({users: newUsers});
	}

	render() {	
		console.log(this.state.users);
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{this.state.users.map( data => {
							return <Person person={data}></Person>;
						})}
					</tr>
				</tbody>
			</table>
		</div>)
	}
}
