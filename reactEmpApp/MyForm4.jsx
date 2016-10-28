import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import MenuItem from 'react-bootstrap/lib/MenuItem'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import request from 'superagent'; 
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class MyForm4 extends React.Component {
  constructor(props) {
    super(props);    

    this.state = {delempId: ''};
    this.handledelempId = this.handledelempId.bind(this);
  }

  handledelempId(event) {
    this.setState({delempId: event.target.value});
  }

delcall()
{
  var delId =  document.getElementById("delempId").value;
  console.log(delId);
  var baseurl = 'http://localhost:8080/mavenproject2/api/employee/deleteEmployeeById/';
  console.log(baseurl);
  var url = baseurl.concat(delId);
  console.log(url);
  request
  .del(url)
  .end(function(error, res)
  {
  console.log(res);
  if (error || !res.ok) {
       alert('Oh no! error');
     } else {
       alert((res.text));
     }

  });
}

  render() {

    return (
     <Grid>
    <Row className="show-grid">
    <Col xs={12} md={5} ><code>
    {
    <form className="commentForm">
         <div>
        
    
            <h1>Delete Employee</h1>
            <p> <ControlLabel>Enter the EmployeeId</ControlLabel>
            <FormControl
                type="text"
                id="delempId"
                placeholder="employeeId" 
                delempId={this.state.value}
                 onChange={this.handledelempId}
            /></p>
      <p> 
            <Button onClick = {this.delcall} bsStyle="primary">Delete</Button>
            </p>
         </div>  
      </form>
      }
      </code></Col>
       </Row>
       </Grid>
    );
  }
}
