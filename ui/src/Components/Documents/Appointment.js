import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup';
import './Appointment.css'

export default function OfferLetter(props) {

  

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
          firstName:Yup.string().trim().required(' First name is required'),
          lastName:Yup.string().trim().required('Last name is required'),
          email:Yup.string().trim().required('Email is required'),
          companyName:Yup.string().trim().required('Company name is required'),
          addressLine1:Yup.string().trim().required('Company address is required'),
          date:Yup.string().trim().required('Date is required'),
          empName:Yup.string().trim().required('Employee name is required'),
          designation:Yup.string().trim().required('Designation  is required'),
          doj:Yup.string().trim().required('Date of Joining is required'),
          empNo:Yup.string().trim().required('Employee number is required'),
          hrname:Yup.string().trim().required('Hr name is required'),
          hrdesignaation:Yup.string().trim().required('Hr designation is required'),

      })}
      onSubmit={(values)=>{
        props.OfferLetter(values)
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form >
      <div className="card m-3  shadow ">
        <div class="card-header bg-white">
          <h4>Basic details</h4>
          <p className='fw-light'>Organized and secure</p>
        </div>
        <div className="card-body pay  ">
          <div className="d-flex basic-details-log justify-content-evenly">
            <div className="col-5 m-2 main-cont-sag">
              <Field
                name='firstName'
                className="form-control p-3 "
                placeholder="First name"
                type="text"
              />
              <div className='text-danger fw-light'><ErrorMessage name="firstName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name='lastName'
                className="form-control p-3"
                placeholder="Last name"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="lastName" /></div>
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
               <div className='text-danger fw-light'><ErrorMessage name="email" /></div>
            </div>

            <div className="col-5  m-2"></div>
              
          </div>
          
        </div>
      </div>

      <div className="card m-3  shadow ">
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
               <div className='text-danger fw-light'><ErrorMessage name="companyName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
              <Field
                name="addressLine1"
                className="form-control p-3"
                placeholder="Company addresss"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="addressLine1" /></div>
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
               <div className='text-danger fw-light'><ErrorMessage name="date" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag"></div>
              
           
          </div>
          
        </div>
      </div>

      <div className="card m-3  shadow ">
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
               <div className='text-danger fw-light'><ErrorMessage name="empName" /></div>
            </div>
            <div className="col-5  m-2 main-cont-sag">
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
              <Field
                name="doj"
                className="form-control p-3"
                placeholder="Employee joining date"
                type="Date"
              />
               <div className='text-danger fw-light'><ErrorMessage name="doj" /></div>
            </div>
            <div className='col-5 m-2 main-cont-sag'>
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
              <Field
                name="hrname"
                className="form-control  p-3 "
                placeholder="HR name"
                type="text"
              />
               <div className='text-danger fw-light'><ErrorMessage name="hrname" /></div>
            </div>
            <div className=" m-2 col-5  main-cont-sag ">
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
