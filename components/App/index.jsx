import React from 'react';
import Timeline from 'Timeline/'
import state from '../../state';
import './index.css';

let App = React.createClass({
  render: function() {
    var weeks = state.weeks;
    return (
      <div className="app-wrapper">
        <header className="app-wrapper-header">
          <h1 className="app-wrapper-header-brand">
            Unspent
          </h1>
        </header>
        <main  className="app-wrapper-main">
          <Timeline weeks={weeks} />
        </main>
      </div>
    );
  }
});

export default App;
