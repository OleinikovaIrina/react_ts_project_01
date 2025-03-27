import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import './styles.css'

function Consultation_04(){
const [invoiceAmount, setInvoiceAmount] = useState<string>('');
const [showTotalPrice, setShowTotalPrice] = useState<boolean>(false)


  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setInvoiceAmount(event.target.value)
  }

const showTotalPriceHandler = ()=>{ setShowTotalPrice(!showTotalPrice)}

console.log(showTotalPrice);


    return(
        <div className="consultation_04-container">
            <Input name='invoice_amount' onChange={onChangeAmount} value={invoiceAmount}/>
            < Button name='SHOW FULL PRICE' onClick={showTotalPriceHandler}/>
        {showTotalPrice &&
        <div>
            {invoiceAmount}
        </div>}
        </div>
        
        

    )
 
}

export default Consultation_04