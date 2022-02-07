import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const[enteredTitle,setEnteredTitle] = useState('');
  const[enteredAmount,setEnteredAmount] = useState('');
  const[enteredDate,setEnteredDate] = useState('');
  // //we can use multi state approach too for a program. Below is example for that
  // const[userInput,setUserInput]=useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''
  // })

  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value);
    // //approaches we can follow when we use multi state approach
    // // 1 st approach to update state based on prev state
    // //if we use this ppaorach sometimes when more updates are performed the upate based on prev state may not perform instantly.
    // //so we have to prefer second approach mostly
    // // setUserInput({
    // //   ...userInput,
    // //   enteredTitle: event.target.value
    // // })
    // // 2nd approach to update state based on prev state
    // setUserInput((prevState)=>{
    //   return{
    //   ...prevState,
    //   enteredTitle: event.target.value
    //   }
    // })
  }
  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }
  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
     title : enteredTitle,
     amount : enteredAmount,
     date : enteredDate 
    }
    props.onAdd(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;