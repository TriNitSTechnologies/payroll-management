import React, { useState, useEffect } from 'react';

import { Calendar } from 'primereact/calendar';

import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';



function Attendense() {



    const [value5, setValue5] = useState(null);

    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);

    const [value11, setValue11] = useState(null);

    const [value14, setValue14] = useState('');
    const cities = [
        { name: 'Present', code: 'NY' },
        { name: 'Leave', code: 'RM' },
        { name: 'Half Day', code: 'LDN' },
        { name: 'Unpaid Leave', code: 'IST' },
        { name: 'Unpaid Half Day', code: 'PRS' }
    ];


    return (
        <div>

            <div className="card w-75  shadow m-auto">
                <h5 className='card-header'>Change Attendance</h5>


                <div className="p-fluid grid card-body p-4 m-4 ">
                    <h6>Change your Attendance on 01/11/2022</h6>
                    <div className="p-fluid grid">
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <Dropdown inputId="dropdown" value={value11} options={cities} onChange={(e) => setValue11(e.value)} optionLabel="name" />
                                <label htmlFor="dropdown">Status</label>
                            </span>
                        </div>



                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <Calendar id="calendar" value={value5} onChange={(e) => setValue5(e.value)} />
                                <label htmlFor="calendar">Check In</label>
                            </span>
                        </div>

                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputMask id="inputmask" value={value7} onChange={(e) => setValue7(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                                <label htmlFor="inputmask">Check Out</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputNumber inputId="inputnumber" value={value8} onChange={(e) => setValue8(e.value)} />
                                <label htmlFor="inputnumber">InputNumber</label>
                            </span>
                        </div>





                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputTextarea id="textarea" value={value14} onChange={(e) => setValue14(e.target.value)} rows={3} />
                                <label htmlFor="textarea">Remarks</label>
                            </span>
                        </div>
                        <div className='d-flex justify-content-space-between'>
                            <div>
                                <button className='btn btn-primary'>UPDATE</button>
                                <button className='btn btn-danger ms-2'>CANCEL</button>
                                <div className='float-end'>
                                <button className='btn btn-secondary '>DELETE ATTENDANCE</button>
                            </div>
                            </div>
                           
                        </div>


                    </div>

                </div>

            </div>
        </div>

    )
}
export default Attendense;