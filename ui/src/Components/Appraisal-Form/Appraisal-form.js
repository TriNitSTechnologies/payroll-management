
import { ErrorMessage, Field, Form, Formik,} from 'formik'
import * as Yup from 'yup';
import './Appraisal-form.css'



export default function Appraisal(props){
    return(
        <div className=" p-3">           
                <div className="card my-3  shadow p-2">
                    <div className="card-body">
                    <Formik
                    initialValues={{
                        companyName:'',
                        companyaddress:'',
                        address1:'',
                        currentdate:'',
                        employeename:'',
                        employeeID:'',
                        employeedesignation:'',
                        annualctc:'',
                        appraisaldate:'',
                        hrname:'',
                        hrdesignation:''
                    }}
                    validationSchema={Yup.object({
                        companyName:Yup.string().trim().min(5,'Enter minimum 5 characters').required('Company name is required'),
                        companyaddress:Yup.string().trim().min(5,'Enter minimum 6 characters').required('Company address is required'),
                        address1:Yup.string().trim().min(5,'Enter minimum 6 characters').required('Address is required'),
                        currentdate:Yup.string().trim().required('Date  is required'),
                        employeename:Yup.string().trim().min(5,'Enter minimum 5 characters').required('Employee name is required'),
                        employeeID:Yup.string().trim().min(5,'Enter minimum 4 digits').required('Employee id is required'),
                        employeedesignation:Yup.string().trim().min(5,'Enter minimum 5 characters').required('Employee designation is required'),
                        annualctc:Yup.string().trim().min(2,'Enter minimum 2 digits').required('Annual ctc is required'),
                        appraisaldate:Yup.string().trim().required('Appraisal date is required'),
                        hrname:Yup.string().trim().min(5,'Enter minimum 5 characters').required('Hr name is required'),
                        hrdesignation:Yup.string().trim().min(5,'Enter minimum 5 characters').required('Hr designation is required')
                    })}
                    onSubmit={(values)=>{                      
                        props.appraisalForm(values)
                        alert(JSON.stringify(values,null,"2"))
                    }}
                    >
                        <Form>
                            
                             <div className='d-flex justify-content-evenly app-get-tagged'>
                                    <div class="form-floating  col-5 app-anti-tech">
                                    <Field type="text" name='companyName' class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Company name</label>
                                    <div className='text-danger ps-2 fw-light'><ErrorMessage name='companyName'/></div>
                                    </div>
                                    <div class="form-floating  col-5 app-anti-tech ">
                                    <Field type="text" name='companyaddress' class="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Company address</label>
                                    <div className='text-danger ps-2 fw-light'><ErrorMessage name='companyaddress'/></div>
                                    </div>
                            </div>
                            <div className='d-flex justify-content-evenly app-get-tagged'>
                                    <div class="form-floating col-5 app-anti-tech">
                                    <Field type="text" name='address1' class="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Address</label>
                                    <div className='text-danger ps-2 fw-light'><ErrorMessage name='address1'/></div>
                                    </div>
                                    <div class="form-floating col-5 app-anti-tech">
                                    <Field type="date" name='currentdate' class="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Current date</label>
                                    <div className='text-danger ps-2 fw-light'><ErrorMessage name='currentdate'/></div>
                                     </div> 
                            </div> 
                            <div className='d-flex justify-content-evenly app-get-tagged'>
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="text" name='employeename' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Employee name</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='employeename'/></div>
                                </div>                                            
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="number" name='employeeID' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Employee ID</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='employeeID'/></div>
                                </div> 
                            </div> 
                            <div className='d-flex justify-content-evenly app-get-tagged'>
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="text"name='employeedesignation' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Employee designation</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='employeedesignation'/></div>
                                </div>                                            
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="number" name='annualctc' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Annual CTC</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='annualctc'/></div>
                                </div> 
                            </div>
                            <div className='d-flex justify-content-evenly app-get-tagged'>
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="date" name='appraisaldate' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Appraisal date</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='appraisaldate'/></div>
                                </div>                                            
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="text" name='hrname' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">HR name</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='hrname'/></div>
                                </div>
                            </div> 
                            <div className='d-flex justify-content-evenly app-get-tagged'>
                                <div class="form-floating col-5 app-anti-tech">
                                <Field type="text" name='hrdesignation' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">HR designation</label>
                                <div className='text-danger ps-2 fw-light'><ErrorMessage name='hrdesignation'/></div>
                                </div>
                                <div className='col-5 app-anti-tech'></div>
                            </div>                                                                                                                                                               
                                                                        
                             
                            <div className='my-2 ms-5'>
                                <span>
                                    <button  className="btn btn-primary btn-lg mx-3 "  type="submit" >Generate</button>
                                </span>
                            </div>
                        </Form>
                    </Formik>                                           
                    </div>                     
                </div>    
        </div>
    )
}