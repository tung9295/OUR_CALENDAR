import React from 'react';
import { Table, Input, InputGroup, InputGroupText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const Example = (props) => {
  return (
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
                  <Input addon type="checkbox"/>
                </InputGroupText>
            </InputGroup>
          </td>
          <td>
            <InputGroup>
                <InputGroupText>
                  <Input addon type="checkbox"/>
                </InputGroupText>
            </InputGroup>
          </td>
          <td>
            <InputGroup>
                <InputGroupText>
                  <Input addon type="checkbox"/>
                </InputGroupText>
            </InputGroup>
          </td>
          <td>
            <InputGroup>
                <InputGroupText>
                  <Input addon type="checkbox"/>
                </InputGroupText>
            </InputGroup></td>
          <td>
            <InputGroup>
                <InputGroupText>
                  <Input addon type="checkbox"/>
                </InputGroupText>
            </InputGroup>
          </td>
        </tr>
        <tr>
          <th scope="row">火</th>
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
  );
}

export default Example;
