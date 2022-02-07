import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onAdd={props.onAddExpense}/>
    </div>
  );
};

export default NewExpense;