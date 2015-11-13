// Week Component
import React, {PropTypes} from 'react';
import { DropTarget } from 'react-dnd';
import moment from 'moment';
import OccurrenceCard from 'OccurrenceCard';
import './index.css';

const dateFormat = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd'
};


const weekTarget = {
  canDrop(props) {
    return true;
  },
  drop(props, monitor) {
    let source = monitor.getItem();
    if(props.onCardDrop){
      props.onCardDrop({
        targetWeekId: props.id,
        sourceWeekId: source.weekId,
        cardId: source.id
      });
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

let Week = React.createClass({
  propTypes: {
    id: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    cards: PropTypes.array.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    onCardDrop: PropTypes.func
  },
  render() {
    let {id, balance, cards, date, isOver, canDrop, connectDropTarget} = this.props;
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
    return connectDropTarget(
      <div className={`week-track ${(isOver && canDrop) ? `mod-drag-over` : ''}`}>
        <div className="week-header">
          <span className="week-duration">
            {moment(date).calendar(null, dateFormat)}
          </span>
          <span className={`week-balance-forward mod-${level}`}>
            {`$${balance.toFixed(2)}`}
          </span>
        </div>
        <div className="week-occurrences">
          {cards.map(card => <OccurrenceCard {...card}  key={card.id} weekId={id} />)}
        </div>
      </div>
    );
  }
});

export default DropTarget('OccurrenceCard', weekTarget, collect)(Week);
