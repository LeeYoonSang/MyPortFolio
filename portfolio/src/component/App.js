import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'page';
import Header from 'component/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;