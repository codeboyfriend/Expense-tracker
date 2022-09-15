import { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const [msg, setMsg] = useState(false)

    const onSubmit = e => { 
      e.preventDefault();
      
      const newTransaction = { 
        id: Math.floor(Math.random() * 1000000), 
        text, 
        amount: +amount
      }

      addTransaction(newTransaction)
      setText('')
      setAmount(0)
    }

    const onEmpty = e => {
      e.preventDefault();

      setTimeout(() => {
        setMsg(true)
      }, 1000);
    }

  return (
    <div className="add">
      {msg && <h3 className="errorMsg">Enter all details</h3>}
      <h3>Add new Transaction</h3>

      <hr />

      <form onSubmit={text !== '' ? onSubmit : onEmpty}>
        <label>Text</label>
        <input 
          type='text' 
          placeholder='Enter Text...'
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />

        <label className="labelClass">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input 
          type='number' 
          placeholder='Enter Amount...'
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
        />

        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
