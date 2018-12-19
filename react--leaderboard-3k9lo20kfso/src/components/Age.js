import React from 'react';

class Age extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleAge} className="btn btn-primary age" name="age">Age</button>
    );
  }
}

export default Age;
