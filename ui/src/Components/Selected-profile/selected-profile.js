import './selected-profile.css'
import { SelectButton } from 'primereact/selectbutton';
import { useState } from 'react';
import Details from '../Details/details';
import MyProfile from '../My-Profile/My-Profile';


export default function SelectProfile(){
    const [value2, setValue2] = useState('Employement');
    const paymentOptions = [
        'Employement',
        'Detail',
        'Document',
        'Payroll', 
    ];
    return(
        <div className=" border h-100 p-2 select-profile-app ">

             <div className="card p-1 shadow mx-3">
                <div className="card-body  d-flex justify-content-between">
                <div>
                    <span>Home</span>
                    <span> / Profile</span> 
                </div>
                <div>
                    <h5>Profile</h5>
                </div>
                </div>
            </div>

            <div className=' my-3 mx-3 '>    
                <SelectButton value={value2} options={paymentOptions} onChange={(e) => setValue2(e.value)} />                
            </div>

                {value2 === 'Detail' && (
                <>
                <div>
                    <Details/>
                </div>
                </>
                )}

                {value2 === 'Employement' &&(
                    <>
                    <div>
                        <MyProfile/>
                    </div>
                    </>
                )}

        </div>
    )
}