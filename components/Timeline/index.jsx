import React from 'react';
import Week from 'Week/'
import './index.css';

let Timeline = React.createClass({
  render: function() {
    var {weeks} = this.props;
    return (
      <div className="timeline">
        <div className="timeline-filter">
          <i className="fa fa-chevron-left"></i>
          {` Sat Jan 1 `}
          <i className="fa fa-chevron-right"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {` By Week `}
          <i className="fa fa-chevron-down"></i>
        </div>
        <div className="timeline-week">
          <div className="timeline-week-nav">
            <button className="timeline-week-nav-button">
              <i className="fa fa-chevron-left"></i>
            </button>
          </div>
          {weeks.map((week, idx) => <Week {...week} />)}
          <div className="timeline-week-nav">
            <button className="timeline-week-nav-button mod-last">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
});

export default Timeline;
