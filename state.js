export default {
  weeks: [
    {
      balance: 235.00,
      date: 'Jan 1 - Jan 7',
      cards: [
        {processed:true, type: 'credit', date: 'Jan 1', amount: 300, title: 'Salary Income Salary Income Salary Income '},
        {processed:true, type: 'debit', date: 'Jan 1', amount: 100, title: 'Misc. Budget'}
      ]
    },
    {
      balance: 305.29,
      date: 'Jan 8 - Jan 14',
      cards: [
        {processed:true, type: 'credit', date: 'Jan 8', amount: 300, title: 'Salary Income'},
        {processed:false, type: 'debit', date: 'Jan 4', amount: 600, title: 'Mortgage', late: true},
        {processed:false, type: 'debit', date: 'Jan 8', amount: 100, title: 'Misc. Budget'},
        {processed:false, type: 'debit', date: 'Jan 12', amount: 147, title: 'Electricity'}
      ]
    },
    {
      balance: 1789.29,
      date: 'Jan 15 - Jan 21',
      cards: [
        {processed:false, type: 'credit', date: 'Jan 15', amount: 300, title: 'Salary Income'},
        {processed:false, type: 'debit', date: 'Jan 15', amount: 100, title: 'Misc. Budget'},
        {processed:false, type: 'debit', date: 'Jan 17', amount: 125, title: 'Car Insurance'}
      ]
    },
    {
      balance: 862.29,
      date: 'Jan 22 - Jan 28',
      cards: [
        {processed:false, type: 'credit', date: 'Jan 22', amount: 300, title: 'Salary Income'},
        {processed:false, type: 'debit', date: 'Jan 22', amount: 100, title: 'Misc. Budget'}
      ]
    },
    {
      balance: 328.39,
      date: 'Jan 29 - Feb 5',
      cards: [
        {processed:false, type: 'credit', date: 'Jan 29', amount: 300, title: 'Salary Income'},
        {processed:false, type: 'debit', date: 'Jan 29', amount: 100, title: 'Misc. Budget'}
      ]
    }
  ]
};
