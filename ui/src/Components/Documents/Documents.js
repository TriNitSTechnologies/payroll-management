
import { Link } from "react-router-dom";
import Joinletter from "../Offer Letter/offerletter";
import "./../../App.css";

export default function Documents(props) {
    return (
        <>
            <Link to='/offer-letter'>Offerleter</Link>
            <Joinletter />   
        </>
    )
}