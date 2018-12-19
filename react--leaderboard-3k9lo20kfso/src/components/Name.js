import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleName} className="btn btn-primary name" name="name">Name</button>
    )
  }
}

export default Name;
