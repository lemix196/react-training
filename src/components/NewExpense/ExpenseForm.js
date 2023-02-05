import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // HANDLING FORM SUBMITTING AND FORM DATA PROCESSING

  // separate State approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // one State approach
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // separate State approach
    setEnteredTitle(event.target.value);
  };

  // one State approach (not the best one ;) )
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };

  // better one State approach
  // setUserInput((prevState) => {
  //   return {...prevState, enteredTitle: event.target.value};
  // });

  const amountChangeHandler = (event) => {
    // separate State approach
    setEnteredAmount(event.target.value);

    // // one State approach (not the best one ;) )
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // better one State approach
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value};
    // });
  };
  const dateChangeHandler = (event) => {
    // separate State approach
    setEnteredDate(event.target.value);

    // one State approach (not the best one ;) )
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // better one State approach
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // HANDLING SHOWING/HIDING FORM BY BUTTON CLICKING

  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const showExpenseFormHandler = () => {
    setShowNewExpenseForm(true);
  };

  const hideExpenseFormHandler = () => {
    setShowNewExpenseForm(false);
  };

  if (showNewExpenseForm == true) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div>
          <button type="button" onClick={hideExpenseFormHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="new-expense__control">
        <div>
          <button type="button" onClick={showExpenseFormHandler}>
            New Expense
          </button>
        </div>
      </div>
    );
  }
};

export default ExpenseForm;
