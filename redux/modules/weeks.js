const MOVE_OCCURRENCE   = 'unspent/weeks/MOVE_OCCURRENCE';
const ACTION_2   = 'unspent/sample/ACTION_2';

let initialState = [
  {
    id: 1,
    balance: 235.00,
    date: 'Jan 1 - Jan 7',
    cards: [
      {id: 1, processed:true, type: 'credit', date: 'Jan 1', amount: 300, title: 'Salary Income Salary Income Salary Income '},
      {id: 2, processed:true, type: 'debit', date: 'Jan 1', amount: 100, title: 'Misc. Budget'}
    ]
  },
  {
    id: 2,
    balance: 305.29,
    date: 'Jan 8 - Jan 14',
    cards: [
      {id: 3, processed:true, type: 'credit', date: 'Jan 8', amount: 300, title: 'Salary Income'},
      {id: 4, processed:false, type: 'debit', date: 'Jan 4', amount: 600, title: 'Mortgage', late: true},
      {id: 5, processed:false, type: 'debit', date: 'Jan 8', amount: 100, title: 'Misc. Budget'},
      {id: 6, processed:false, type: 'debit', date: 'Jan 12', amount: 147, title: 'Electricity'}
    ]
  },
  {
    id: 3,
    balance: 1789.29,
    date: 'Jan 15 - Jan 21',
    cards: [
      {id: 7, processed:false, type: 'credit', date: 'Jan 15', amount: 300, title: 'Salary Income'},
      {id: 8, processed:false, type: 'debit', date: 'Jan 15', amount: 100, title: 'Misc. Budget'},
      {id: 9, processed:false, type: 'debit', date: 'Jan 17', amount: 125, title: 'Car Insurance'}
    ]
  },
  {
    id: 4,
    balance: 862.29,
    date: 'Jan 22 - Jan 28',
    cards: [
      {id: 10, processed:false, type: 'credit', date: 'Jan 22', amount: 300, title: 'Salary Income'},
      {id: 11, processed:false, type: 'debit', date: 'Jan 22', amount: 100, title: 'Misc. Budget'}
    ]
  },
  {
    id: 5,
    balance: 328.39,
    date: 'Jan 29 - Feb 5',
    cards: [
      {id: 12, processed:false, type: 'credit', date: 'Jan 29', amount: 300, title: 'Salary Income'},
      {id: 13, processed:false, type: 'debit', date: 'Jan 29', amount: 100, title: 'Misc. Budget'},
      {id: 14, processed:false, type: 'debit', date: 'Feb 3', amount: 600, title: 'Mortgage'}
    ]
  }
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MOVE_OCCURRENCE:
      console.log(MOVE_OCCURRENCE);
      return {...state, ...{lastAction: MOVE_OCCURRENCE}};
    case ACTION_2:
      console.log(ACTION_2);
      return {...state, ...{lastAction: ACTION_2}};
    default: return state;
  }
}

export function moveOccurrence(payload) {
  return { type: MOVE_OCCURRENCE, payload };
}

export function action2() {
  return { type: ACTION_2 };
}