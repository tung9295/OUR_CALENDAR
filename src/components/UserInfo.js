import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: ''
    }
    this.handleChangeNameInput = this.handleChangeNameInput.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
  }

  handleChangeNameInput(event) {
    var valueInput = event.target.value;
    this.setState({value : valueInput})
  }

  handleSubmitBtn() {
    this.setState({
      name: this.state.value
    }, () => {
      alert('Submitted')
      this.props.handleCallbackUserInfo(this.state.name)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <input type="text" placeholder="Name" onChange={this.handleChangeNameInput}/>
        <button onClick={this.handleSubmitBtn}>Submit</button>
      </div>
    )
  }
}

export default UserInfo;