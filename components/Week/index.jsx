import React from 'react';
import OccurrenceCard from 'OccurrenceCard';
import './index.css';

let Week = React.createClass({
  propTypes: {
    balance: React.PropTypes.number.isRequired,
    cards: React.PropTypes.array.isRequired,
    date: React.PropTypes.string.isRequired
  },
  render: function() {
    let {balance, cards, date} = this.props;
    let level = '';
    switch (true) {
      case balance > 350:
        level = 'good';
        break;
      case balance > 0:
        level = 'low';
        break;
      default:
        level = 'bad';
    }
    return (
      <div className='timeline-week-track'>
        <div className="timeline-week-header">
          <span className="timeline-week-duration">
            {date}
          </span>
          <span className={`timeline-week-balance-forward mod-${level}`}>
            {`$${balance.toFixed(2)}`}
          </span>
        </div>
        <div className="timeline-week-occurrences">
          {cards.map(card => <OccurrenceCard {...card} />)}
        </div>
      </div>
    );
  }
});

export default Week;
