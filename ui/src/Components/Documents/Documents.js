
import { useSelector } from "react-redux";
import PrintAppoiement from "../LetterofAppointment/Appointment.print";
import "./../../App.css";
import Joinletter from "../Joinletter/Joinletter";
import AddressProofLetter from "../AddressproofLetter/AddressproofLetter";


export default function Documents(props) {
 
  const offerLeeter = useSelector(
    (state) => state.OfferLetterSlice.offerletter
  );
  const appointmentLetter = useSelector(
    (state) => state.appointment.appointment
  );
  
  // const addressProof = useSelector(
  //   (state) => state.Address.addressProof
  // );
 
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
      {/* {addressProof.selectedPage === "Address Proof" &&(
        <>
         <div>
        <AddressProofLetter addressletter={addressProof.fromObj} />
      </div>
        </>
      )} */}
     
    </>
  );
}
