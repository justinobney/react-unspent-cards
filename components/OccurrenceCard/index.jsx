import React from 'react';
import { DragSource } from 'react-dnd';
import './index.css';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  canDrag(props, monitor){
    return !props.processed && !props.saving
  },
  beginDrag(props) {
    let {id, weekId} = props;
    return {id, weekId};
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

let OccurrenceCard = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    amount: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    late: React.PropTypes.bool,
    saving: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    weekId: React.PropTypes.number.isRequired,
    // Injected by React DnD:
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
          {
            !!late &&
            <i className="fa fa-exclamation text-danger" title="late" />
          }
          <span title={`Week Id: ${weekId}`}>{date}</span>
        </div>
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
