import React, { Component } from 'react';
import './App.css';
import TableCalendar from './components/TableCalendar';
import UserInfo from './components/UserInfo';
import { db } from './components/Firebase'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      clickedDay: '',
      isChecked: false
    }
    this.dataProcessing = this.dataProcessing.bind(this);
  }

  dataProcessing() {
    const { name, clickedDay, isChecked } = this.state;
    var dbData = []
    db.ref('TableCalendar').on('value', snapshot => {
      const data = snapshot.val();
      dbData = data;
    });
    console.log(dbData)
    if (dbData[clickedDay] === undefined) {
      db.ref('TableCalendar').child(clickedDay).push('')
    }
    const valueOfNames = Object.values(dbData[clickedDay]);
    const keyOfNames = Object.keys(dbData[clickedDay]);
    if (isChecked) {
      if (!valueOfNames.includes(name)) {
        db.ref('TableCalendar').child(clickedDay).push(name)
      }
    }
    if (!isChecked) {
      if (valueOfNames.includes(name)) {
        var key = keyOfNames.filter(key => {
          return dbData[clickedDay][key] === name}
        )
        console.log('Will delete')
        db.ref('TableCalendar/' + clickedDay + '/' + key).remove()
      }
    }
  }

  callbackTable = (day, isChecked) => {
    this.setState({
      clickedDay: day,
      isChecked: isChecked
    }, () => {
      this.dataProcessing()
    })
    // this.setState({
    //   clickedDays: this.state.clickedDays.concat(day)
    // }, () => console.log(this.state.clickedDays))
  }
  callbackUserInfo = (name) => {
    this.setState({name : name})
  }
  render() {
    return (
      <div className="App">
        <UserInfo handleCallbackUserInfo={this.callbackUserInfo}></UserInfo>
        <TableCalendar handleCallbackTable={this.callbackTable}></TableCalendar>
      </div>
    )
  }
}

export default App;
