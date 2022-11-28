
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

function AttendenseForm() {
    const [value5, setValue5] = useState(null);
    const [date8, setDate8] = useState(null);
    const [date9, setDate9] = useState(null);
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
            <div className="card m-4 shadow">
                <div className='card-header'>
                    <h5>Change Attendance</h5>
                </div>
                <div className="p-fluid card-body p-4 m-4 flex-wrap">

                   
                </div>

            </div>
        </div>

    )
}
export default AttendenseForm;
