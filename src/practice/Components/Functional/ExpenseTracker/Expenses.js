import React from 'react'
import { useState } from 'react/cjs/react.development';
import Card from '../../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
function Expenses(props) {
    const[filteredYear,setFilteredYear] = useState('2020');
    
   
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
      }
     
      return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter value={filteredYear} onFilterChange={filterChangeHandler}/>
            {props.items.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            )
            )
            }
        </Card>
        </div>
    )
}

export default Expenses
