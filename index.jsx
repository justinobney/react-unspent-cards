import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from './components/App/'

const root = document.querySelector("#mount");

try {
  ReactDOM.render(<App />, root)
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, root)
}
