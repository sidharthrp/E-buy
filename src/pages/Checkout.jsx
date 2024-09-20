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
    <div className='flex justify-center items-center pt-20 '>
    <form  className=' shadow-lg rounded-md p-5' >
      <h3 className='font-bold text-center pt-10 pb-4 text-xl'>Payment Details</h3>
      <div className='py-4'>
        <h1 className='font-bold'>Pay With</h1>
        
        <input className='' type='radio' name='payment' value='card'></input>
        <label className='pr-3 pl-1'>Card</label>
        
        <input className='p-2' type='radio' name='payment' value='bank'></input>
        <label className='pr-3 pl-1'>Bank</label>
        
        <input className='p-2' type='radio' name='payment' value='upi'></input>
        <label className='pr-3 pl-1'>UPI</label>
      </div>
      <div>
        <label className='font-bold'>Card Number:</label>
        <br></br>
        <input className=' border-2 border-gray-300 rounded-md w-full mb-7'
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 1234 5678"
          required
        />
      </div>
      <div className='flex justify-between w-[300px]'>
      <div>
        <label className='font-bold py-2 '>Expiration Date</label>
        
        <input
          className='w-32 border-2 border-gray-300 rounded-md'
          type="text"
          name="expirationDate"
          value={paymentInfo.expirationDate}
          onChange={handleChange}
          placeholder="MM/YY"
          required
        />
      </div>
      <div>
        <label className='font-bold '>CVV</label>
        <br></br>
        <input
        className='w-16 border-2 border-gray-300 rounded-md'
          type="text"
          name="cvc"
          value={paymentInfo.cvc}
          onChange={handleChange}
          placeholder="123"
          required
        />
      </div>
      </div>
      <button type="submit" className='bg-green-600 text-white rounded-lg py-[1px] mt-8 w-full'>Pay</button>
    </form>
    </div>
    )
}

export default Checkout