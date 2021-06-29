import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Result from './pages/Result/Result';
import Home from './pages/Home/Home';
import FilesProvider from './context/FilesContext'

ReactDOM.render(
	<React.StrictMode>
       <FilesProvider>
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/result">
					<Result />
				</Route>
				<Route exact path="/register"> <Register></Register></Route>
				<Route exact path="/home"><Home></Home></Route>
			</Switch>
		</Router>
    </FilesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
