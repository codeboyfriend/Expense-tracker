import { useState } from "react"

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add Transaction</h3>

      <form>
        <label>Text</label>
        <input 
          type='text' 
          placeholder='Enter Text...'
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />

        <label>
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
    </>
  )
}

export default AddTransaction
