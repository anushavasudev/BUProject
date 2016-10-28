import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import MyForm1 from './MyForm1.jsx';
import MyForm2 from './MyForm2.jsx';
import MyForm3 from './MyForm3.jsx';
import MyForm4 from './MyForm4.jsx';

class Header extends React.Component {

insert()
{
	window.location = "/MyForm1";
}
view()
{
	window.location = "/MyForm3";
}
update()
{
	window.location = "/MyForm2";
}
delete()
{
	window.location = "/MyForm4";
}

   render() {
      return (
      
    <Jumbotron>
    <h1>Hello, there!</h1>
    <p>This is a simple React Application, demonstarting CRUD operations using REST APIs. Go ahead and see how it works!</p>
    <p>
    <ButtonToolbar>
      <Button bsStyle="primary" onClick = { this.insert} >Insert</Button>
      <Button bsStyle="primary" onClick = { this.view} >View</Button>
      <Button bsStyle="primary" onClick = { this.update} >Update</Button>
	    <Button bsStyle="primary" onClick = { this.delete} >Delete</Button>
	 </ButtonToolbar>
    </p>



  </Jumbotron>


      );
   }
}

export default Header;