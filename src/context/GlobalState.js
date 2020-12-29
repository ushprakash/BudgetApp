import React, { createContext, useReducer, useEffect } from "react";
//import AppReducer from "./AppReducer";


const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions"))  || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || []
};



const AppReducer=(state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions]
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions]
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          incomeTransaction => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          expenseTransaction => expenseTransaction.id !== action.payload
        )
      };
      
     
      default:
      return state;
    }
};
export const GlobalContext = createContext(initialState);


export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {

    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  });

  

  
  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addIncome = incomeTransaction => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction
    });
  };

  const addExpense = expenseTransaction => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction
    });
  };
  

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        
        deleteTransaction,
        addIncome,
        addExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};