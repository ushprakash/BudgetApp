import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: '',
  });
  
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: '',
  });

  const { incomeText, incomeAmount } = income;
  const { expenseText, expenseAmount } = expense;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  
  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: '',
      });
    }
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: '',
      });
    }
  };
  
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-income" >
          <input
          
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
       
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-expense">
          <input
          
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;