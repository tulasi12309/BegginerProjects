import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const savedExpenseHandler = (enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    // console.log(expenseData);
    props.onExpenseData(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSavedExpense ={savedExpenseHandler} />
    </div>
  );
};

export default NewExpense;