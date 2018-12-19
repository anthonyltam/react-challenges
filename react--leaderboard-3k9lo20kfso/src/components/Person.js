import React from 'react';

class Person extends React.Component {
  
  render() {
    return <div className="flexed-table">
        <div className="age">{this.props.person.age}</div>
        <div className="name">{this.props.person.name}</div>
        <div className="points">{this.props.person.points}</div>
        <div className="rank">{this.props.person.rank}</div>
      </div>;}; 
}

export default Person;