import React from 'react';

// const People = ({person}) => (
//   <div>person.name</div>
//   <div>person.name</div>

// );
class People extends React.Component {
  render() {
    return (
      <div className='person-info'>
        <div>{this.props.person.name}</div>
        <div>{this.props.person.dob}</div>
      </div>
    );
  }
}

export default People;