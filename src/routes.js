import React from 'react'; 

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./pages/main";
import Product from './pages/product';

/* 
Browser router define que as rotas através de um
browser, o Switch vai permitir que uma única rota seja
acessada
*/

const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products/:id" component={Product} />
      </Switch>
    </BrowserRouter>
)

export default Routes