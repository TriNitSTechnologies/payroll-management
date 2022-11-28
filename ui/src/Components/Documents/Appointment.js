import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup';
import './Appointment.css'

export default function Appointment(props) {
  // function Formsubmithandler(event){
  //     event.preventDefault();
  // }

  return (
    <div  className="border py-2 p-1 doc-home-log">
      
      <div className="card m-3 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <small className="fs-6">Home / company</small>
          </div>
          <div>
            <h5>Document</h5>
          </div>
        </div>
      </div>
    <Formik
      initialValues={{
        firstName:'',
        lastName:'',
        email:'',
        companyName:'',
        addressLine1:'',
        date:'',
        empName:'',
        designation:'',
        doj:'',
        empNo:'',
        hrname:'',
        hrdesignaation:''

      }} 
      validationSchema={Yup.object({
          companyName:Yup.string().trim().required('Company name is required'),
          addressLine1:Yup.string().trim().required('Company address is required'),
          address1:Yup.string().trim().required('Company address1 is required'),
          date:Yup.string().trim().required('Date is required'),
          empName:Yup.string().trim().required('Employee name is required'),
          designation:Yup.string().trim().required('Designation  is required'),
          doj:Yup.string().trim().required('Date of Joining is required'),
          empNo:Yup.string().trim().required('Employee number is required'),
          hrname:Yup.string().trim().required('Hr name is required'),
          hrdesignaation:Yup.string().trim().required('Hr designation is required'),

      })}
      onSubmit={(values)=>{
        props.Appdata(values)
      }}
    >
      <Form >
     

      <div className="card m-3  shadow ">
        <div class="card-header bg-white">
          <h4>Company details</h4>
          <p className='fw-light'>Let every one know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 main-cont-sag ">
              <div className='mb-3 fw-bold'>
                Company Name
              </div>
              <Field
                name="companyName"
                className="form-control p-3 "
                placeholder="Company name"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="companyName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <div className='mb-3 fw-bold'>
                Company Address
              </div>
                
                <Field
                name="addressLine1"
                className="form-control p-3"
                placeholder="Company address"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="addressLine1" /></div>
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2 main-cont-sag">
              <div className='mb-3 fw-bold'>
                Date Of Month / Year
              </div>
                <Field
                name="date"
                className="form-control p-3"
                placeholder="Date Of Month /year"
                type="Date"
              />
               <div className='text-danger fw-light'><ErrorMessage name="date" /></div>
               
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <div className='mb-3 fw-bold'>
                Company Address 2
              </div>
                <Field
                name="address1"
                className="form-control p-3"
                placeholder=" Company Address 2"
                type="address1"
              />
               <div className='text-danger fw-light'><ErrorMessage name="address1" /></div>
               
            </div>
           
          </div>
          
        </div>
      </div>

      <div className="card m-3  shadow ">
        <div class="card-header bg-white">
          <h4>Employee Details</h4>
          <p className='fw-light'>Let every one know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 main-cont-sag ">
            
            <div className='mb-3 fw-bold'>Employee Name</div>
              <Field
                name='empName'
                className="form-control p-3 "
                placeholder="Employee name"
                type="text"
              />

               <div className='text-danger fw-light'><ErrorMessage name="empName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <div className='mb-3 fw-bold'>Employee Designation</div>
              <Field
                name="designation"
                className="form-control p-3"
                placeholder="Employee designation"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="designation" /></div>
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2 main-cont-sag">
              <div className='mb-3 fw-bold'>Date Of Joinging</div>
              <Field
                name="doj"
                className="form-control p-3"
                placeholder="Employee joining date"
                type="Date"
              />
               <div className='text-danger fw-light'><ErrorMessage name="doj" /></div>
            </div>
            <div className='col-5 m-2 main-cont-sag'>
              <div className='mb-3 fw-bold'>Employee Id</div>
            <Field
                name="empNo"
                className="form-control p-3"
                placeholder="Employee id"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="empNo" /></div>
            </div>
            
              
          </div>
          
        </div>
      </div>


      <div className="card m-3  shadow ">
        <div class="card-header bg-white">
          <h4>Human resource</h4>
          <p className=' fw-light'>Let every one know the essentials so they're fully prepared</p>
        </div>
        
        <div className="card-body pay ">
          <div className=" d-flex basic-details-log justify-content-evenly  ">
            <div className=" col-5 main-cont-sag m-2 ">
              <div className='mb-3 fw-bold'>HR Name</div>
              <Field
                name="hrname"
                className="form-control  p-3 "
                placeholder="HR name"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="hrname" /></div>
            </div>
            <div className=" m-2 col-5  main-cont-sag ">
              <div className='mb-3 fw-bold'>HR Designation</div>
              <Field
                name="hrdesignaation"
                className="form-control  p-3"
                placeholder="HR designation"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="hrdesignaation" /></div>
            </div>
          </div>
          
        </div>
      </div>


        <span className="ms-3">
          <button  className="btn btn-primary btn-lg mx-3 "  type="submit" >Generate</button>
        </span>
        </Form>

       </Formik>
      
    </div>
  );
}
