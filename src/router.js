import React from 'react';
import { Router, Route, Switch, routerRedux } from "dva/router";
import { config } from './utils';
import taos from './routes/taos';
import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;
const { menuGlobal } = config;
function RouterConfig({ history, app}) {
    return (
        <ConnectedRouter history={history}>
            {/*<Switch>*/}
            {/*    {*/}
            {/*        menuGlobal.map(({path,name, component, ...dynamics})=> {*/}
            {/*            return (*/}
            {/*              <Route*/}
            {/*                key={name}*/}
            {/*                path={path}*/}
            {/*                exact*/}
            {/*                component={component}*/}
            {/*              />*/}
            {/*            );*/}
            {/*          })*/}
            {/*    }*/}
            {/*</Switch>*/}
          <Switch >
            <Route path="/" component={taos} />
          </Switch>
        </ConnectedRouter>
    );
}
export default RouterConfig;