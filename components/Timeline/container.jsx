// TimelineContainer Component
import React from 'react';
import { connect } from 'react-redux'
import {moveOccurrence} from '../../redux/modules/weeks.js'
import Timeline from 'Timeline'

let TimelineContainer = React.createClass({
  _handleDrop(dropInfo){
    let {dispatch} = this.props;
    dispatch(moveOccurrence(dropInfo));
    dropInfo.sourceWeekId = dropInfo.targetWeekId;
    setTimeout(() => dispatch(moveOccurrence(dropInfo)), 1000);
  },
  render() {
    let {weeks} = this.props;
    return (
      <Timeline weeks={weeks} onCardDrop={this._handleDrop} />
    );
  }
});

function mapStateToProps(state) {
  return {
    weeks: state.weeks
  };
}

export default connect(mapStateToProps)(TimelineContainer)
