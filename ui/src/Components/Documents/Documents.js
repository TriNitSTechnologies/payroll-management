
import { Link, Route } from "react-router-dom";
import Joinletter from "../Offer Letter/offerletter";
import Payslip1 from "../Payslip1/Payslip1";
import Payslip2 from "../Payslip2/Payslip2";
import Payslip3 from "../Payslip3/Payslip3";
import "./../../App.css";
export default function Documents() {
    return (
        <>
            <Payslip1 />
            <Payslip2 />
            
            <Payslip3 />
        
        

            <Link to='/offer-letter'>Offerleter</Link>

            <Joinletter />

        </>
    )
}
