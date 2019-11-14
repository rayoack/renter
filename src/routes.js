import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Property from './pages/Property';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalogo" component={Catalog} />
      <Route path="/favoritos" component={Favorites} />
      <Route path="/imovel/:id" component={Property} />
    </Switch>
  );
}
