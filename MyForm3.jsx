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


export default class MyForm3 extends React.Component {

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

    this.state = {showModal: false};
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
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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
   "ManagerId : " +document.getElementById("managerId").value);
  }
  func()
  {
  open();
  getcall();
  }
getcall()
{
  var getId =  document.getElementById("updateempId").value;
  console.log(getId);
  var baseurl = 'http://localhost:8080/mavenproject2/api/employee/getEmployeeById/';
  var firstName;
  console.log(baseurl);
  var url = baseurl.concat(getId);
  console.log(url);
  request
  .get(url)
  .end(function(error, res)
  {
  console.log(res);
  if (error || !res.ok) {
       alert('Oh no! error');
     } else {
    firstName = res.body[0].firstName;
     console.log(firstName + "\n");
     var lastName = res.body[0].lastName;
     console.log(lastName + "\n");
     var designationId = res.body[0].designationId;
     console.log(designationId + "\n");
     var userName = res.body[0].username;
     console.log(userName + "\n");
     var password = res.body[0].password;
     console.log(password + "\n");
     var age = res.body[0].age;
     console.log(age + "\n");
     var address = res.body[0].address;
     console.log(address + "\n");
     var emailId = res.body[0].emailId;
     console.log(emailId + "\n");
     var isAdmin = res.body[0].isAdmin;
     console.log(isAdmin + "\n");
     var managerId = res.body[0].managerId;
     console.log(managerId + "\n"); 
     document.getElementById("getfirstName1").value = firstName;
     document.getElementById("getlastName1").value = lastName;
     document.getElementById("getdesignationId1").value = designationId;
     document.getElementById("getUserName1").value = userName;
     document.getElementById("getpassword1").value = password;
     document.getElementById("getage1").value = age;
     document.getElementById("getaddress1").value = address;
     document.getElementById("getemailId1").value = emailId;
     document.getElementById("getisAdmin1").value = isAdmin;
     document.getElementById("getmanagerId1").value = managerId;

     if(document.getElementById("getisAdmin1").value == 1)
     {
     document.getElementById("getisAdmin1").checked = true;
     }
     else
     {
     document.getElementById("getisAdmin1").checked = false;
     }
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
    <div>
            <h1>View Employee Details</h1>
            <p> <ControlLabel>Enter the EmployeeId</ControlLabel>
            <FormControl
        type="text"
        id="updateempId"
        placeholder="employeeId" 
        employeeId={this.state.value}
        onChange={this.handleempId}
      /></p>
      <p> 
            <Button onClick = {this.getcall} bsStyle="primary">Submit</Button>
            </p>
         </div> 
      <p><ControlLabel>First Name</ControlLabel>
      <FormControl
        readOnly
        type="text" 
        id= "getfirstName1"
        placeholder="First Name" 
        firstName={this.state.value}
        onChange={this.handleFirstName}
      /></p>
      <p><ControlLabel>Last Name</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getlastName1"
        placeholder="Last Name" 
        lastName={this.state.value}
        onChange={this.handleLastName}
      /></p>
      <p><ControlLabel>Designation Id</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getdesignationId1"
        placeholder="Designation Id" 
        designationId={this.state.value}
        onChange={this.handledesig}
      /></p>
      <p><ControlLabel>User Name</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getUserName1"
        placeholder="User Name" 
        userName={this.state.value}
        onChange={this.handleUserName}
      /></p>
      <p><ControlLabel>Password</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getpassword1"
        placeholder="Password" 
        password={this.state.value}
        onChange={this.handlepassword}
      /></p>
      <p><ControlLabel>Age</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getage1"
        placeholder="Age" 
        age={this.state.value}
        onChange={this.handleage}
      /></p>
      <p><ControlLabel>Address</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getaddress1"
        placeholder="Address" 
        address={this.state.value}
        onChange={this.handleaddress}
      /></p>
      <p><ControlLabel>EmailId</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getemailId1"
        placeholder="emailId" 
        emailId={this.state.value}
        onChange={this.handleemailId}
      /></p>
      <p><input 
      readOnly
      type="checkbox" 
      id="getisAdmin1"
      isAdmin = {this.state.value}
      onChange={this.handleisAdmin}
      />I'm an Admin</p>
      <p><ControlLabel>Manager Id</ControlLabel>
      <FormControl
      readOnly
        type="text"
        id="getmanagerId1"
        placeholder="ManagerId" 
        managerId={this.state.value}
        onChange={this.handlemanagerId}
      /></p>
      
      </form>
      }
      </code></Col>
       </Row>
       </Grid>
    );
  }
}