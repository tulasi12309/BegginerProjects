// import { useState } from 'react/cjs/react.development';
import './App.css';
// import TodoList from './TodoList/TodoList';
import WeatherApp from './WeatherApp/WeatherApp';
// import Calculator from './Calculator/Calculator';
// import EmojiSearch from './EmojiSearch/EmojiSearch';
// import Profile from './SocialMediaApp/Pages/Profile/Profile';
// import Expense from './practice/Components/Child-to-Parent/Expense';
// import Expenses from './practice/Components/Functional/ExpenseTracker/Expenses';
// import NewExpense from './practice/Components/Functional/NewExpense/NewExpense';
// import './EmojiSearch/EmojiSearch.css'; 
// import ImageGallery from './ImageGallery/ImageGallery';
function App() {
  // const Dummy_expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ]; 
  // const[expenses,setExpenses]= useState(Dummy_expenses);
  // const addExpenseHandler = (expense) =>{
  //     setExpenses((prevExpenses) =>{
  //       return[expense, ...prevExpenses]
  //     })

  //   }
  return (
    <div className='App'>
      {/* <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/> */}
      {/* <Expense/> child-to-parent example */}
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Calculator/> */}
      {/* <EmojiSearch/> */}
      {/* <ImageGallery/> */}
      {/* <TodoList/> */}
      <WeatherApp/>
    </div>
  );
}

export default App;
