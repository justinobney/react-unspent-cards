import React from 'react';
import './index.css';

let OccurrenceCard = React.createClass({
  propTypes: {
    amount: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    late: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    let {amount, date, late, processed, type, title} = this.props;
    return (
      <div className={`occurrence-card mod-${type} u-clearfix`}>
        <div className="occurrence-card-title u-truncate-text">
          { !!processed &&
            <i className="fa fa-check-circle text-success" />
          }
          {processed ? ` ${title}` : title}
        </div>
        <div className="occurrence-card-date">
          {
            !!late &&
            <i className="fa fa-exclamation text-danger" title="late" />
          }
          {` ${date}`}
        </div>
        <div className={`occurrence-card-amount mod-${type}`}>
          {type == 'credit' ? amount : `-${amount}`}
        </div>
      </div>
    );
  }
});

export default OccurrenceCard;
