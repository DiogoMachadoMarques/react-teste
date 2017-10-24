import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AtividadesListConteiner from './components/atividade/consulta/AtividadesListConteiner';

const App = () =>
<div>
  <Route path="/" exact component={HomePage} />
  <Route path="/Login" exact component={LoginPage} />
  <Route path="/Atividades" exact component={AtividadesListConteiner} />
</div>

export default App;
