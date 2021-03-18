import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavigation from './Navigation/MainNavigation';
import Clients from './client/pages/Clients';
import NewClient from './client/pages/NewClient';
import UpdateClient from './client/pages/UpdateClient';

let routes;

const App = () => {
    routes = (
        <Switch>
            <Route path="/" exact>
                 <Clients />
            </Route>
            <Route path="/clienti/new" exact>
                  <NewClient />
            </Route>
            <Route path="/clienti/:clientId" exact>
                <UpdateClient />
            </Route>
           
        </Switch>
    );

    return (
        <Router>
            <MainNavigation />
            <main>
                {routes}
            </main>
        </Router>
    )
};

export default App;