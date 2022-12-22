import { useSelector } from "react-redux"
import AppraisalLetter from "../Appraisal-Letter/Appraisal-letter"


export default function AppraisalDocument(){
    const Appraisalletter = useSelector((state)=>state.Appraisaldata.Appraisalletter)
    console.log(Appraisalletter)
    return(
        <>  
        <div>
            {Appraisalletter.selectedPage === 'Appraisal'  && (
                <>
                 <div>
                    <AppraisalLetter appdataletter={Appraisalletter.formObj}/>
                </div>
                </>
            )}
        </div>
        </>
    )
}