
import { Link, Route, Switch } from "react-router-dom";
import Joinletter from "../Offer Letter/offerletter";


import "./../../App.css";
export default function Documents() {
    return (
        <>
<div className=" mt-4 mb-2">


<button type="button" class="btn btn-primary"><Link className="text-decoration-none text-light" to='/Payslip1'>Payslip1</Link></button>
<button type="button" class="btn btn-primary  ms-3 "><Link  className="text-decoration-none text-light" to='/Payslip2'>Payslip2</Link></button>
<button type="button" class="btn btn-primary  ms-3 "><Link  className="text-decoration-none text-light" to='/Payslip3'>Payslip3</Link></button>

</div>     
  


           
            
       
        
         

            <Link to='/offer-letter'>Offerleter</Link>

            <Joinletter />

        </>
    )
}
