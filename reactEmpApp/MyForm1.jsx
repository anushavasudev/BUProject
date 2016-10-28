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


export default class MyForm1 extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {firstName: ''};
    this.handleFirstName = this.handleFirstName.bind(this);

    this.state = {lastName: ''};
    this.handleLastName = this.handleLastName.bind(this);

    this.state = {designationId: ''};
    this.handledesig = this.handledesig.bind(this);

    this.state = {userName: ''};
    this.handleUserName = this.handleUserName.bind(this);

    this.state = {password: ''};
    this.handlepassword = this.handlepassword.bind(this);

    this.state = {age: ''};
    this.handleage = this.handleage.bind(this);

    this.state = {address: ''};
    this.handleaddress = this.handleaddress.bind(this);

    this.state = {emailId: ''};
    this.handleemailId = this.handleemailId.bind(this);

    this.state = {isAdmin: ''};
    this.handleisAdmin = this.handleisAdmin.bind(this);

    this.state = {managerId: ''};
    this.handlemanagerId = this.handlemanagerId.bind(this);

    this.state = {employeeId: ''};
    this.handleempId = this.handleempId.bind(this);

    this.state = {delempId: ''};
    this.handledelempId = this.handledelempId.bind(this);

    this.state = {desId: 'select'};
    this.handledesId = this.handledesId.bind(this);
  }

  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleLastName(event) {
    this.setState({lastName: event.target.value});
  }
  handledesig(event) {
    this.setState({designationId: event.target.value});
  }
  handleUserName(event) {
    this.setState({userName: event.target.value});
  }
  handlepassword(event) {
    this.setState({password: event.target.value});
  }
  handleage(event) {
    this.setState({age: event.target.value});
  }
  handleaddress(event) {
    this.setState({address: event.target.value});
  }
  handleemailId(event) {
    this.setState({emailId: event.target.value});
  }
  handleisAdmin(event) {
    this.setState({isAdmin: event.target.value});
  }
  handlemanagerId(event) {
    this.setState({managerId: event.target.value});
  }
  handleempId(event) {
    this.setState({employeeId: event.target.value});
    }

  handledelempId(event) {
    this.setState({delempId: event.target.value});
  }

  handledesId(event)
  {
    this.setState({desId: event.target.value});
  }

myclick1()
{
 alert("First Name : " + document.getElementById("firstName").value + "\n" + 
 "Last Name : " + document.getElementById("lastName").value + "\n" + 
 "Designation Id: " + document.getElementById("designationId").value + "\n" + 
 "User Name : " +document.getElementById("UserName").value + "\n" + 
 "Password : " +document.getElementById("password").value + "\n" + 
 "Age :"+document.getElementById("age").value + "\n" + 
 "Address : " +document.getElementById("address").value + "\n" + 
 "emailId : " +document.getElementById("emailId").value + "\n" + 
 "isAdmin :"+ document.getElementById("isAdmin").checked+ "\n" + 
 "ManagerId : " +document.getElementById("managerId").value);
 if(document.getElementById("isAdmin").checked)
 console.log("Check box selected\n");
 else
 console.log("Check box unselected\n");
}

postcall()
{
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var designationId = document.getElementById("desid").value;
  var userName = document.getElementById("UserName").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var emailId = document.getElementById("emailId").value;
  var isAdmin;
  if(document.getElementById("isAdmin").checked)
  {
  isAdmin = 1;
  }
  else
  {
  isAdmin = 0;
  }
  var managerId = document.getElementById("managerId").value;

  if(firstName == "")
  {
  alert("Enter first Name");
  }

  request
  .post('http://localhost:8080/mavenproject2/api/employee/insertEmployee')
  .type('form')
  .send({firstName: firstName, lastName: lastName ,designationId: designationId,username: userName, password: password, age: age,address:address , emailId: emailId, isAdmin: isAdmin, managerId: managerId } )
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
    <Col xs={12} md={8} ><code>
    {
    <form className="commentForm">
    <h1>Enter Employee Details</h1>

      <p><ControlLabel>First Name</ControlLabel>
       <FormControl
        type="text" 
        id= "firstName"
        placeholder="First Name" 
        firstName={this.state.value}
        onChange={this.handleFirstName}
      />
      </p>
      <p><ControlLabel>Last Name</ControlLabel>
      <FormControl
        type="text"
        id="lastName"
        placeholder="Last Name" 
        value={this.state.value}
        onChange={this.handleLastName}
      /></p>
      <p><ControlLabel>Designation Id</ControlLabel>
      
      <p><div>
               <select id="desid" onChange={this.change} value={this.state.value}>
                  <option value="1">Intern</option>
                  <option value="2">Software Engineer 1</option>
                  <option value="3">Software Engineer 2</option>
                  <option value="4">Software Engineer 3</option>
               </select>
               <p></p>
               <p>{this.state.value}</p>
           </div></p>
           
           </p>
      <p><ControlLabel>User Name</ControlLabel>
      <FormControl
        type="text"
        id="UserName"
        placeholder="User Name" 
        userName={this.state.value}
        onChange={this.handleUserName}
      /></p>
      <p><ControlLabel>Password</ControlLabel>
      <FormControl
        type="text"
        id="password"
        placeholder="Password" 
        password={this.state.value}
        onChange={this.handlepassword}
      /></p>
      <p><ControlLabel>Age</ControlLabel>
      <FormControl
        type="text"
        id="age"
        placeholder="Age" 
        age={this.state.value}
        onChange={this.handleage}
      /></p>
      <p><ControlLabel>Address</ControlLabel>
      <FormControl
        type="text"
        id="address"
        placeholder="Address" 
        address={this.state.value}
        onChange={this.handleaddress}
      /></p>
      <p><ControlLabel>EmailId</ControlLabel>
      <FormControl
        type="text"
        id="emailId"
        placeholder="emailId" 
        emailId={this.state.value}
        onChange={this.handleemailId}
      /></p>
      <p><input 
      type="checkbox" 
      id="isAdmin"
      isAdmin = {this.state.value}
      onChange={this.handleisAdmin}
      />I'm an Admin</p>
      <p><ControlLabel>ManagerId</ControlLabel>
      <FormControl
        type="text"
        id="managerId"
        placeholder="ManagerId" 
        managerId={this.state.value}
        onChange={this.handlemanagerId}
      /></p>
      <Button onClick = {this.postcall} bsStyle="primary">Submit</Button>
      </form>
      }
      </code></Col>
       </Row>
       </Grid>
    );
  }
}
