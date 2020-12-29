import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const TransactionList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  const { expenseTransactions } = useContext(GlobalContext);
const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions">
      <div className="transactionIncome">
    
      <h4>Income History</h4>
    
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => ( 
      
      <li className="transaction">
      <span className="transaction-text" >{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
      {incomeTransaction.incomeAmount}
      </span>
      
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
      
    
    </li>
        ))}
      </ul>
    </div>

    <div className="transactionexpense">
      
      <h4>Expense History</h4>
      
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        {expenseTransaction.expenseAmount}
      </span>
      
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    
    </li>
        ))}
      </ul>
    </div>
    
    </div>

    
  );
};

export default TransactionList;