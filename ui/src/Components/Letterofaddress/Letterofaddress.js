import { useSelector } from "react-redux";
import AddressProofLetter from "../AddressproofLetter/AddressproofLetter";

export default function Letterofaddress(){
    const addressProof = useSelector(
        (state) => state.Address.addressProof
      );
    return(
        <>
          {addressProof.selectedPage === "Address Proof" &&(
        <>
         <div>
        <AddressProofLetter addressletter={addressProof.fromObj} />
      </div>
        </>
      )}
        </>

    )
}