import React, { useState } from 'react'
import Card from '../../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props) {
    const[title,setTitle]=useState(props.title);
    const clickHandler=()=>{
            setTitle('Updated!');
    }
    return (
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className='expense-item__description'>
            <h2 className='expense-item h2'>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem
