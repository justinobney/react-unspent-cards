import React from 'react';
import RedBox from 'redbox-react';
import App from './components/App/'

const root = document.querySelector("#mount");

try {
  React.render(<App />, root)
} catch (e) {
  React.render(<RedBox error={e} />, root)
}
