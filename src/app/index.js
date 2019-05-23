import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "@version/react-router-v3";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"user/:id"} component={User} />
                    <Route path={"home"} component={Home} />
                </Route>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));