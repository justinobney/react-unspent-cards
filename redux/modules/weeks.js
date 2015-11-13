import 'lodash';
import moment from 'moment';

const MOVE_OCCURRENCE   = 'unspent/weeks/MOVE_OCCURRENCE';

const thisFriday = moment().startOf('week').add(5, 'days');
let initialState = [1,2,3,4,5].map((num, idx) => {
  let weekStart = thisFriday.clone().add(idx * 7, 'days');
  return {
    id: _.uniqueId(),
    balance: _.random(100,1231),
    date: weekStart.toDate(),
    cards: _.times(_.random(1,4)).map(id => {
      let type = id != 0 ? {type: 'debit', title: 'Misc. Budget'} : {type: 'credit', title: 'Salary'};
      let date = weekStart.clone().add(id, 'days').toDate();
      return {
        id: _.uniqueId(),
        processed:moment(date).isSame(thisFriday),
        type: type.type,
        date,
        amount: _.random(100,1231),
        title: type.title
      };
    })
  }
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MOVE_OCCURRENCE:
      let {sourceWeekId, targetWeekId, cardId} = action.payload;
      let sourceWeek = state[_.findIndex(state, {id:sourceWeekId})];
      let targetWeek = state[_.findIndex(state, {id:targetWeekId})];
      let card = _.findWhere(sourceWeek.cards, {id:cardId});
      let idx = sourceWeek.cards.indexOf(card);
      card.saving = sourceWeekId !== targetWeekId;
      if(sourceWeekId !== targetWeekId){
        card.late = moment(card.date).isBefore(targetWeek.date);
      }
      sourceWeek.cards.splice(idx,1);
      targetWeek.cards.push(card);
      return [...state];
    default: return state;
  }
}

export function moveOccurrence(payload) {
  return { type: MOVE_OCCURRENCE, payload };
}
