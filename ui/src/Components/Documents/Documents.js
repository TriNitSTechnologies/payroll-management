import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PrintAppoiement from "../Letter of Appoiement/APPOIEMENT.print";
import "./../../App.css";
import Joinletter from "../Joinletter/Joinletter";


export default function Documents(props) {
 
  const offerLeeter = useSelector(
    (state) => state.OfferLetterSlice.offerletter
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
    </>
  );
}
