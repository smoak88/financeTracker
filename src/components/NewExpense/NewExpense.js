import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

function NewExpense(props) {
  const [newForm, setNewForm] = useState(false);

  const newFormHandler = () => {
    setNewForm(true);
  };

  const closeFormHandler = () => {
    setNewForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewForm(false);
  };

  return (
    <div className="new-expense">
      {!newForm && <button onClick={newFormHandler}>Add New Expense</button>}
      {newForm && (
        <ExpenseForm
          onCloseForm={closeFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
