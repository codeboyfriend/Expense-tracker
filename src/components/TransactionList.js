import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h3>History</h3>
      <hr />
      <ul>
        {
          transactions.map(transaction => <Transaction 
            key={transaction.id} 
            transaction={transaction}
          />)
        }
      </ul>
    </div>
  )
}

export default TransactionList
