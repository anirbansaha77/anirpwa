import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import JavaScript from './components/Courses/JavaScript';
import ReactPage from './components/Courses/ReactPage';
import ES6 from './components/Courses/ES6Questions';
import NoMatch from './components/NoMatch';

const routes = () =>(
    
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/JavaScript' component={JavaScript} />
        <Route path='/ReactQuestions' component={ReactPage} />
        <Route path='/ES6Questions' component={ES6} />
        <Route component={NoMatch} />
    </Switch>
);

export default routes;