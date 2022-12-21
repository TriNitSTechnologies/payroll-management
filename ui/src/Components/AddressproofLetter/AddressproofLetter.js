import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

 export default function AddressProofLetter(props){
    let addressletter = props.addressletter;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"letterof address",
    })
    return(<>
        <button onClick={handlePrint} className=" btn btn-outline-dark float-end mt-0">Print</button>
        <div ref={componentRef}>
        <div className="card w-75  m-auto   px-1 py-1">
            <div className="card-header border-bottom  ">
      <h4 className="text-end me-3">TriNitS Technologies Private Limited</h4><br/>
      <h6 className="text-end me-3">No. 6-2-204, Naidupeta, Andhra Pradesh, India -</h6><br/>
      <h6 className="text-end me-3">524421, Andhra Pradesh, 524421</h6>
            </div>
            <div className="card-body">
                <div className="text-end">
                    <b>{addressletter.CurrentDate}</b>
                    </div>
                <h5 className="text-center">To whomsoever it may concern</h5>
                <div>
                <p>This is to inform you that Trinits Technologies has been employed with{addressletter.CompanyName}  Private Limited as {addressletter.Employeedesignation}
 since{addressletter.Employeejoiningdate}.
</p>
</div>
<div>
    <p>
    Trinits Technologies’s current residential address as per our records is{addressletter.Employeecurrentaddress}
    </p>
</div>
<div className="p-2">
    <p>
    This letter is issued on Trinits Technologies’s request for address proof.
    </p>
</div>
<div className="p-3">
    <p>for {addressletter.CompanyName}  Private Limited</p>
</div>
<div>
    <b>{addressletter.HRname}</b>
</div>
<div>
    <b>
    {addressletter.HRdesignation}
    </b>
</div>

            </div>


        </div>
        </div>
        </>
    )
}