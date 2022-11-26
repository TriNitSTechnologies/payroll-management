import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PrintAppoiement from "../Letter of Appoiement/APPOIEMENT.print";
import "./../../App.css";
import Joinletter from "../Joinletter/Joinletter";


export default function Documents(props) {
 
  const offerLeeter = useSelector(
    (state) => state.OfferLetterSlice.offerletter
  );
  const appointmentLetter = useSelector(
    (state) => state.appoiement.appoienment
  );
 
  return (
    <>
     

      {offerLeeter.selectedPage == "Offer-Letter" && (
        <>
          <div id="joinLetter">
            <Joinletter JoinletterData={offerLeeter.formObj} />
          </div>
        </>
      )}
      {appointmentLetter.selectedPage == "Appointment Letter" && (
        <>
          <div id="joinLetter">
            <PrintAppoiement appoiementsendData={appointmentLetter.fromObj} />
          </div>
        </>
      )}
    </>
  );
}
