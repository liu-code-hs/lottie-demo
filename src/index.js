import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BMP from './pages/bitmap';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import NewYear from './pages/newYear';
import Text from './pages/Text';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App}>
      </Route>
      <Route path="/bmp" component={BMP}></Route>
      <Route path="/newYear" component={NewYear}></Route>
      <Route path="/text" component={Text}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
