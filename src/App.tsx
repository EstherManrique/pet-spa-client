import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListServices from './components/Services/ListServices';
import ListStores from './components/Stores/ListStores';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/stores" component={ListStores} />
        <Route path="/services" component={ListServices} />

      </Switch>


    </BrowserRouter>
  );
}

export default App;
