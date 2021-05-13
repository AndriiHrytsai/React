import './App.css';
import ListUsers from "./components/List_Users/List_Users";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    let link = '/users';
    return (
        <div className="App">
            <Router>
                <Link to={link}>Users</Link>
                <Switch>
                    <Route path={link} render={() => <ListUsers/>}/>
                </Switch>
                <br/>
            </Router>
        </div>
    );

}

export default App;
