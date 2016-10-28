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

export default class MyForm2 extends React.Component {

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
 "Designation Id: " + document.getElementById("desId").value + "\n" + 
 "User Name : " +document.getElementById("UserName").value + "\n" + 
 "Password : " +document.getElementById("password").value + "\n" + 
 "Age :"+document.getElementById("age").value + "\n" + 
 "Address : " +document.getElementById("address").value + "\n" + 
 "emailId : " +document.getElementById("emailId").value + "\n" + 
 "ManagerId : " +document.getElementById("managerId").value);
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
     document.getElementById("getfirstName").value = firstName;
     document.getElementById("getlastName").value = lastName;
     document.getElementById("getdesId").value = designationId;
     document.getElementById("getUserName").value = userName;
     document.getElementById("getpassword").value = password;
     document.getElementById("getage").value = age;
     document.getElementById("getaddress").value = address;
     document.getElementById("getemailId").value = emailId;
     document.getElementById("getisAdmin").value = isAdmin;
     document.getElementById("getmanagerId").value = managerId;

     if(document.getElementById("getisAdmin").value == 1)
     {
     document.getElementById("getisAdmin").checked = true;
     }
     else
     {
     document.getElementById("getisAdmin").checked = false;
     }
     }


  });
}
putcall()
{
  var firstName = document.getElementById("getfirstName").value;
  console.log(firstName);
  var lastName = document.getElementById("getlastName").value;
  var designationId = document.getElementById("getdesId").value;
  var userName = document.getElementById("getUserName").value;
  var password = document.getElementById("getpassword").value;
  var age = document.getElementById("getage").value;
  var address = document.getElementById("getaddress").value;
  var emailId = document.getElementById("getemailId").value;
  var isAdmin;
  if(document.getElementById("getisAdmin").checked)
  {
  isAdmin = 1;
  }
  else
  {
  isAdmin = 0;
  }
  var managerId = document.getElementById("getmanagerId").value;


  var getId =  document.getElementById("updateempId").value;
  console.log(getId);
  var baseurl = 'http://localhost:8080/mavenproject2/api/employee/updateEmployeeById/';
  var firstName;
  console.log(baseurl);
  var url = baseurl.concat(getId);
  console.log(url);

  request
  .put(url)
  .type('form')
  .send({firstName: firstName, lastName: lastName ,designationId: designationId,username: userName, password: password, age: age,address:address , emailId: emailId, isAdmin: isAdmin, managerId: managerId } )
  .end(function(error, res)

  {
  console.log(res);
  if (error || !res.ok) {
       alert('Cannot update this user!');
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
    <div>
            <h1>Update Employee Details</h1>
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
        type="text" 
        id= "getfirstName"
        placeholder="First Name" 
        firstName={this.state.value}
        onChange={this.handleFirstName}
      /></p>
      <p><ControlLabel>Last Name</ControlLabel> 
      <FormControl
        type="text"
        id="getlastName"
        placeholder="Last Name" 
        lastName={this.state.value}
        onChange={this.handleLastName}
      /></p>
      <p><ControlLabel>Designation Id </ControlLabel> 
      <p><div>
               <select id="getdesId" onChange={this.handledesId} value={this.state.value}>
                  <option value="1">Intern</option>
                  <option value="2">Software Engineer 1</option>
                  <option value="3">Software Engineer 2</option>
                  <option value="4">Software Engineer 3</option>
               </select>
               <p></p>
               <p>{this.state.value}</p>
           </div></p>
           
           </p>
      <p><ControlLabel>User Name </ControlLabel> 
      <FormControl
        type="text"
        id="getUserName"
        placeholder="User Name" 
        userName={this.state.value}
        onChange={this.handleUserName}
      /></p>
      <p><ControlLabel>Password</ControlLabel> 
      <FormControl
        type="text"
        id="getpassword"
        placeholder="Password" 
        password={this.state.value}
        onChange={this.handlepassword}
      /></p>
      <p><ControlLabel>Age</ControlLabel> 
      <FormControl
        type="text"
        id="getage"
        placeholder="Age" 
        age={this.state.value}
        onChange={this.handleage}
      /></p>
      <p><ControlLabel>Address</ControlLabel> 
      <FormControl
        type="text"
        id="getaddress"
        placeholder="Address" 
        address={this.state.value}
        onChange={this.handleaddress}
      /></p>
      <p><ControlLabel>EmailId</ControlLabel>
      <FormControl
        type="text"
        id="getemailId"
        placeholder="emailId" 
        emailId={this.state.value}
        onChange={this.handleemailId}
      /></p>
      <p><input 
      type="checkbox" 
      id="getisAdmin"
      isAdmin = {this.state.value}
      onChange={this.handleisAdmin}
      />I'm an Admin</p>
      <p><ControlLabel>Manager Id</ControlLabel>
      <FormControl
        type="text"
        id="getmanagerId"
        placeholder="ManagerId" 
        managerId={this.state.value}
        onChange={this.handlemanagerId}
      /></p>
      <Button onClick = {this.putcall} bsStyle="primary">Update</Button>
      
      </form>
      }
      </code></Col>
       </Row>
       </Grid>
    );
  }
}