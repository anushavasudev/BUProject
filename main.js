import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; 
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import Content from './try.jsx';
import Header from './Header.jsx';
import MyForm1 from './MyForm1.jsx';
import MyForm2 from './MyForm2.jsx';
import MyForm3 from './MyForm3.jsx';
import MyForm4 from './MyForm4.jsx';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Header} />
         <Route path = "Header" component = {Header} />
         <Route path = "MyForm1" component = {MyForm1} />
         <Route path = "MyForm3" component = {MyForm3} />
         <Route path = "MyForm2" component = {MyForm2} />
         <Route path = "MyForm4" component = {MyForm4} />
      </Route>
   </Router>
	
), document.getElementById('app'));
//ReactDOM.render(<MarkdownEditor />, mountNode);