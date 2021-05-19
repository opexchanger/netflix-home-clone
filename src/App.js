import React from 'react';
import { Route, Switch } from 'react-router';

import * as ROUTES from './constants/routes';
import Home from './pages/home';

function App() {
    return (
        <Switch>
            <Route path={ROUTES.HOME} exact>
                <Home />
            </Route>
            <Route path={ROUTES.SIGN_IN}>
                <h1>This is the signin page</h1>
            </Route>
            <Route path={ROUTES.SIGN_UP}>
                <h1>This is the signup page</h1>
            </Route>
            <Route path={ROUTES.SIGN_UP}>
                <h1>This is the browse page</h1>
            </Route>
        </Switch>
    );
}

export default App;
