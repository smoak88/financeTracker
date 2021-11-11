import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.data[0].title}
        date={props.data[0].date}
        amount={props.data[0].amount}
      />
    </Card>
  );
}

export default Expenses;
