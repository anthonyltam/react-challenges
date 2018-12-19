import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sortBy: "",
      selected: ""
    };

    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickAge = this.handleClickAge.bind(this);
  }

  handleClickName() {
    console.log('compare by name');
    this.setState({sortBy: 'name', selected: 'first'});
  }

  handleClickAge() {
    console.log('compare by age');
    this.setState({sortBy: 'dob'});
  }



  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter handleAge={this.handleClickAge} handleName={this.handleClickName}></Filter>
        <RecordTable sortBy={this.state.sortBy}></RecordTable>
      </div>
    );
  }
}

export default App;
