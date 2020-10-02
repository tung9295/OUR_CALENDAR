import React, { Component } from 'react';
import { Table, Input, InputGroup, InputGroupText } from 'reactstrap';
import { db } from './Firebase';
import 'bootstrap/dist/css/bootstrap.css'

class TableCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }

  componentDidMount() {
    db.ref('TableCalendar').on('value', snapshot => {
      var value = snapshot.val();
      this.setState({
        value
      })
    })
  }

  checkDb() {
    const name = 'TUNg';
    const days = ['mon2','mon3', 'mon4']
    var names = []
    db.ref('TableCalendar').on('value', snapshot => {
      const data = snapshot.val();
      names = data;
    });
    for (let i = 0; i < days.length; i++) {
      var day = days[i];
      const valueOfNames = Object.values(names[day])
      if (valueOfNames.includes(name)) {
        console.log('Included')
      } else {
        const newNames = names[day].concat(name);
        db.ref('TableCalendar').child(day).set(newNames)
      }
    }

  }

  handleChangeCheckbox(event) {
    this.props.handleCallbackTable(event.target.name, event.target.checked)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.checkDb()}>CheckDb</button>
        <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>1-2限<br/>
              8:50~10:20
            </th>
            <th>3-4限<br/>
              10:30~12:00
  
            </th>
            <th>5-6限<br/>
              13:00~14:30
  
            </th>
            <th>7-8限<br/>
              14:40~16:10
  
            </th>
            <th>9-10限<br/>
              16:20~17:50
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">月</th>
            <td>
              <InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox" 
                      name="mon1" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td>
              <InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="mon2" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td>
              <InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="mon3" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td>
              <InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="mon4" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup></td>
            <td>
              <InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="mon5" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">火</th>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="tue1" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="tue2" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="tue3" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="tue4" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"
                      name="tue5" onChange={this.handleChangeCheckbox}>
                    </Input>
                  </InputGroupText>
              </InputGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">水</th>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">木</th>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">金</th>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
            <td><InputGroup>
                  <InputGroupText>
                    <Input addon type="checkbox"/>
                  </InputGroupText>
              </InputGroup>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    );  
  }
}
  

export default TableCalendar;
