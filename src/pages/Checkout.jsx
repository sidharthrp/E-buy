import React,{useState} from 'react'

function Checkout() {
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvc: '',
    });
      
    const handleChange = (e) => {
        const {name,value} = e.target
        setPaymentInfo({
          ...paymentInfo,
          [name]: value,
        });
    };

     return (
    <div className='flex justify-center items-center '>
    <form  className='shadow-xl rounded-md p-5' >
      <h3 className='font-bold text-center pt-10 pb-4 text-xl'>Payment Details</h3>
      <div className='py-4'>
        <h1>Pay With</h1>
        
        <input className='' type='radio' name='payment' value='card'></input>
        <label className='pr-3 pl-1'>Card</label>
        
        <input className='p-2' type='radio' name='payment' value='bank'></input>
        <label className='pr-3 pl-1'>Bank</label>
        
        <input className='p-2' type='radio' name='payment' value='upi'></input>
        <label className='pr-3 pl-1'>UPI</label>
      </div>
      <div>
        <label>Card Number:</label>
        <br></br>
        <input className=' border-black rounded-md'
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 1234 5678"
          required
        />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="text"
          name="expirationDate"
          value={paymentInfo.expirationDate}
          onChange={handleChange}
          placeholder="MM/YY"
          required
        />
      </div>
      <div>
        <label>CVC:</label>
        <input
          type="text"
          name="cvc"
          value={paymentInfo.cvc}
          onChange={handleChange}
          placeholder="123"
          required
        />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
    </div>
    )
}

export default Checkout