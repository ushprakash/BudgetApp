import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
  

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0);



  return (
    <footer className="container">
      <div className="row">
        <div className="plus">
          <p>Income: {totalIncome} 
            </p>
        </div>
        <div className="balance">
          <p>Balance: {(totalIncome - totalExpenses)}</p>
        </div>
      
        <div className="minus">
          <p>Expenses: {totalExpenses} </p>
        </div> 
        
        </div>
      </footer>
  );
};

export default Balance;