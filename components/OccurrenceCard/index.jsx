// OccurrenceCard Component
import React from 'react';
import { DragSource } from 'react-dnd';
import moment from 'moment';
import './index.css';

const dateFormat = {
  sameDay: '[Today]',
  nextDay: '[Tom]',
  nextWeek: 'MMM D',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] MMM D',
  sameElse: 'MMM D'
};


// Implements the drag source contract.
const cardSource = {
  canDrag(props, monitor){
    return !props.processed && !props.saving && props.type == 'debit';
  },
  beginDrag(props) {
    let {id, weekId} = props;
    return {id, weekId};
  }
};

// Specifies the props to inject into your component.
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

let OccurrenceCard = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    amount: React.PropTypes.number.isRequired,
    late: React.PropTypes.bool,
    saving: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    weekId: React.PropTypes.string.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
    connectDragSource: React.PropTypes.func.isRequired
  },
  render() {
    let {
      isDragging,
      connectDragSource,
      amount,
      date,
      late,
      processed,
      saving,
      type,
      title,
      weekId
    } = this.props;

    return connectDragSource(
      <div className={`occurrence-card mod-${type} u-clearfix`}
        style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className="occurrence-card-title u-truncate-text">
          { !!processed &&
            <i className="fa fa-check-circle text-success" />
          }
          {processed ? ` ${title}` : title}
        </div>
        <div className="occurrence-card-date">
          <span title={`Week Id: ${weekId}`}>{moment(date).calendar(null, dateFormat)}</span>
        </div>
        {
          !!late &&
          <span className="occurrence-card-late-indicator">late</span>
        }
        <div className={`occurrence-card-amount mod-${type}`}>
          {type == 'credit' ? amount : `-${amount}`}
        </div>
        { !!saving &&
          <div className="occurrence-card-saving">saving...</div>
        }
      </div>
    );
  }
});

export default DragSource('OccurrenceCard', cardSource, collect)(OccurrenceCard);
