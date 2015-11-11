import React from 'react';
import TimelineContainer from 'Timeline/container'
import './index.css';

let App = React.createClass({
  render: function() {
    return (
      <div className="app-wrapper">
        <header className="app-wrapper-header">
          <h1 className="app-wrapper-header-brand">
            Unspent
          </h1>
        </header>
        <main  className="app-wrapper-main">
          <TimelineContainer />
        </main>
      </div>
    );
  }
});

export default App;
