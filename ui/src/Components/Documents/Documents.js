import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PrintAppoiement from "../Letter of Appoiement/APPOIEMENT.print";
import Joinletter from "../Offer Letter/offerletter";
import "./../../App.css";

export default function Documents() {
   const appoiememtleter= useSelector(state=>state.appoiement.appoienment)
    return (
        <>
            <Link to='/offer-letter'>Offerleter</Link>
            {/* <Joinletter />    */}

            {appoiememtleter.selectedPage == "Appointment Letter" &&
            <>
            <PrintAppoiement appoiementsendData={appoiememtleter.fromObj}/>
            </>
        }
        </>
       
    )
}