// TimelineContainer Component
import React from 'react';
import { connect } from 'react-redux'
import Timeline from 'Timeline'
import findIndex from 'lodash/array/findIndex';
import findWhere from 'lodash/collection/findWhere';

let TimelineContainer = React.createClass({
  _handleDrop(dropInfo){
    let {sourceWeekId, targetWeekId, cardId} = dropInfo;
    let weeks = this.state.weeks;

    let sourceWeek = weeks[findIndex(weeks, {id:sourceWeekId})];
    let targetWeek = weeks[findIndex(weeks, {id:targetWeekId})];
    let card = findWhere(sourceWeek.cards, {id:cardId});
    let idx = sourceWeek.cards.indexOf(card);
    card.saving = sourceWeekId !== targetWeekId;
    sourceWeek.cards.splice(idx,1);
    targetWeek.cards.push(card);
    this.setState({weeks});

    if(sourceWeekId === targetWeekId){
      return;
    }

    dropInfo.sourceWeekId = targetWeekId;
    setTimeout(() => this._handleDrop(dropInfo), 1000);
  },
  render() {
    let {weeks} = this.props;
    debugger;
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
