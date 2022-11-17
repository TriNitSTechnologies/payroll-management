import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup';
import './Appointment.css'

export default function Appointment() {

  return (
    <div  className="border py-2 doc-home-log">
      
      <div className="card m-4 pay shadow ">
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
          firstName:Yup.string().trim().required(' firstName is required'),
          lastName:Yup.string().trim().required('Lastname is required'),
          email:Yup.string().trim().required('Email.must be rquired'),
          companyName:Yup.string().trim().required('Companyname must be rquired'),
          addressLine1:Yup.string().trim().required('Address must be rquired'),
          date:Yup.string().trim().required('Date must be rquired'),
          empName:Yup.string().trim().required('Employee name must be rquired'),
          designation:Yup.string().trim().required('Designation must be rquired'),
          doj:Yup.string().trim().required('Date of Joining must be rquired'),
          empNo:Yup.string().trim().required('Employee Number must be rquired'),
          hrname:Yup.string().trim().required('Hr Name must be rquired'),
          hrdesignaation:Yup.string().trim().required('Hr Designation must be rquired'),

      })}
      onSubmit={(values)=>{
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
      <div className="card  m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Basic details</h4>
          <p className='fw-light'>Organized and secure</p>
        </div>
        <div className="card-body pay  ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 main-cont-sag">
              <Field
                name='firstname'
                className="form-control p-3 "
                placeholder="First name"
                type="text"
              />
              <div className='text-danger'><ErrorMessage name="firstName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name='lastName'
                className="form-control p-3"
                placeholder="Last name"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="lastName" /></div>
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name="email"
                className="form-control p-3 "
                placeholder="Email address"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="email" /></div>
            </div>

            <div className="col-5  m-2"></div>
              
          </div>
          
        </div>
      </div>

      <div className="card m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Company details</h4>
          <p className='fw-light'>Let every one know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 main-cont-sag">
              <Field
                name="companyName"
                className="form-control p-3 "
                placeholder="Company name"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="companyName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name="addressLine1"
                className="form-control p-3"
                placeholder="Company addresss"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="addressLine1" /></div>
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name="date"
                className="form-control p-3"
                placeholder="Date Of Month /year"
                type="Date"
              />
               <div className='text-danger'><ErrorMessage name="date" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag"></div>
              
           
          </div>
          
        </div>
      </div>

      <div className="card m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Employee details</h4>
          <p className='fw-light'>Let every one know the essentials so they're fully prepared</p>
        </div>
        <div className="card-body pay ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 main-cont-sag ">
              <Field
                name='empName'
                className="form-control p-3 "
                placeholder="Employee name"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="empName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name="designation"
                className="form-control p-3"
                placeholder="Employee designation"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="designation" /></div>
            </div>
          </div>
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name="doj"
                className="form-control p-3"
                placeholder="Employee joining date"
                type="Date"
              />
               <div className='text-danger'><ErrorMessage name="doj" /></div>
            </div>
            <div className='col-5 m-2 main-cont-sag'>
            <Field
                name="empNo"
                className="form-control p-3"
                placeholder="Employee id"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="empNo" /></div>
            </div>
            
              
          </div>
          
        </div>
      </div>


      <div className="card m-4  shadow ">
        <div class="card-header bg-white">
          <h4>Human resource</h4>
          <p className=' fw-light'>Let every one know the essentials so they're fully prepared</p>
        </div>
        
        <div className="card-body pay ">
          <div className=" d-flex basic-details-log justify-content-evenly  ">
            <div className=" col-5 main-cont-sag m-2 ">
              <Field
                name="hrname"
                className="form-control  p-3 "
                placeholder="HR name"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="hrname" /></div>
            </div>
            <div className=" m-2 col-5  main-cont-sag ">
              <Field
                name="hrdesignaation"
                className="form-control  p-3"
                placeholder="HR designation"
                type="text"
              />
               <div className='text-danger'><ErrorMessage name="hrdesignaation" /></div>
            </div>
          </div>
          
        </div>
      </div>


        <span className="ms-3">
          <button className="btn btn-primary btn-lg mx-3 ">Generate</button>
        </span>
        </Form>

       </Formik>
      
    </div>
  );
}
