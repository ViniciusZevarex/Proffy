import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //injeção de estrutura na div root
  <React.StrictMode>
    <App /> {/*componente app*/}
  </React.StrictMode>,
  document.getElementById('root')//div com id #root
);