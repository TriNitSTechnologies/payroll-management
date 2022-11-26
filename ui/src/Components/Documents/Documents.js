import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Joinletter from "../Offer Letter/offerletter";
import "./../../App.css";


export default function Documents(props) {
 
  const offerLeeter = useSelector(
    (state) => state.OfferLetterSlice.offerletter
  );
  
  console.log("offerLeeter " + JSON.stringify(offerLeeter));

  
 
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
