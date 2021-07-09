import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Lista from './componentes/Lista';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Form from './componentes/Form';
import listReducer from './store/reducers/listReducer';


const store = createStore(listReducer, carregarDados());

function carregarDados() {
  let dados = JSON.parse(localStorage.getItem('lista'));
  if (dados) {
    return dados
  } else {
    return []
  }
}

store.subscribe(() => {
  console.log(store.getState())
  localStorage.setItem('lista', JSON.stringify(store.getState()))
})

function App() {


  return (
    <Provider store={store}>

      <Header></Header>
      <Form></Form>
      <Lista></Lista>

    </Provider>

  );
}

export default App;
