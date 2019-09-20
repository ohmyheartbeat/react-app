import React from 'react';
import { Router, Route, Switch } from "dva/router";
import { config } from './utils';

import dynamic from 'dva/dynamic';

const { menuGlobal } = config;

function RouterConfig({ history, app}) {
    return (
        <Router history={history}>
            <Switch>
                {
                    menuGlobal.map(({path, ...dynamic}, index)=>(
                        <Route
                            key={index}
                            path={path}
                            exact
                            component={dynamic({
                                app,
                                ...dynamic
                            })}
                        />
                    ))
                }
            </Switch>
        </Router>
    );
}
export default RouterConfig;