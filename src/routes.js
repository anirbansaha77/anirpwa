import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import JavaScript from './components/Courses/JavaScript';
import ReactPage from './components/Courses/ReactPage';

const routes = () =>(
    
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/JavaScript' component={JavaScript} />
        <Route path='/ReactQuestions' component={ReactPage} />
    </Switch>
);

export default routes;