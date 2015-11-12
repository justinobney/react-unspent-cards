import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import RedBox from 'redbox-react';
import App from './components/App/';
import store from './redux/create.js'

const root = document.querySelector("#mount");

try {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root);
} catch (e) {
  render(<RedBox error={e} />, root)
}
