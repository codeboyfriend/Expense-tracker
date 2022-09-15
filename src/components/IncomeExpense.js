import { useContext } from "react"
import { GlobalContext } from "./context/GlobalState"

const IncomeExpense = () => {
  const { transactions } =useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2)

  return (
    <div  className="board">
      <div>
        <h4>INCOME</h4>
        <p style={{ color: ' #5aeb5a'}}>${income}</p>
      </div>

      <hr />
      
      <div>
        <h4>EXPENSE</h4>
        <p style={{ color: '#ad0202'}}>${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
