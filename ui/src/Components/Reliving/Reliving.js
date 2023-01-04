import { useSelector } from "react-redux";
import Relievingletterform from "../Relievingletterform/Relievingletterform";

 export default function Reliving(){
    const relivingLetter = useSelector(
        (state) => state.relievingSlices.relivingletter
      );
      console.log("relivingLetter " + JSON.stringify(relivingLetter))
     
      return(
      <div>
      
        
        {relivingLetter.selectedPage === "Relievingletter" && (
               
                <div>
                    <Relievingletterform  Relivingletterdata={relivingLetter.fromObj}/>
                </div>
                
        )}
       
       </div>
        
        
      )
 }



  