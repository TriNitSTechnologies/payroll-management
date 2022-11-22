import "./Settings.css";
import { SelectButton } from "primereact/selectbutton";
import { BsHouseFill } from "react-icons/bs";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const [value1, setValue1] = useState("General");
  const options = ["General", "Time Off"];
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thur, setThur] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);
  const [weekObj, setWeekObj] = useState({
    mon: false,
    tue: false,
    wed: false,
    thur: false,
    fri: false,
    sat: false,
    sun: false,
  });
  const [position, setPosition] = useState("center");

  const [festival,setfestival]  =   useState('')
  const [date,setdate]  = useState('')
  const [form,setform]  = useState([])

  function onhandlerfestival(event){
    setfestival(event.target.value)

  }
  function onhandlerdate(event){
    setdate(event.target.value)
  }

  function saveBtn (){
    

    let formObj ={
      festival,
      date

    }
   
    form.push(formObj)
    onHide("displayBasic2")
    console.log(form)
  }

  function addbtn(){
    weekObj.mon = mon;
    weekObj.tue=tue;
    weekObj.wed=wed;
    weekObj.thur=thur;
    weekObj.fri=fri;
    weekObj.sat=sat;
    weekObj.sun=sun;
    onHide("displayBasic")
  }

  const justifyTemplate = (option) => {
    return <i className={option.icon}></i>;
  };
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
    displayBasic2: setDisplayBasic2,
  };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {

    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
        label="Apply"
          
          onClick={() => {
            saveBtn();
            }}
          
          className="bg-warning float-start w-25 "
        />
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="float-start w-25 btn bg-danger text-white"
        />
      </div>
    );
  };


  const renderadd = (name) => {
    return (
      <div>
        <Button
        label="Add"
          
          onClick={() => {
          addbtn()
            }}
          
          className="bg-warning float-start w-25 "
        />
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="float-start w-25 btn bg-danger text-white"
        />
      </div>
    );
  };

  return (
    <Formik
      initialValues={{
        companyName: "",
        companyUrl: "",
      }}
      validationSchema={Yup.object({
        companyName: Yup.string().trim().required("Company Name is requried"),
        companyUrl: Yup.string().trim().required("Company Url is requried"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <>
        <div className="card m-4 pay shadow ">
          <div className="card-body d-flex justify-content-between ">
            <div>
              <small className="fs-6">
                <button className="rounded shadow back me-2 ">
                  <Link to="/" className="text-decoration-none back">
                    <BsHouseFill />
                  </Link>
                </button>
                <Link to="/" className="text-decoration-none text-dark me-1">
                  Home
                </Link>
                / Settings
              </small>
            </div>
            <div>
              <h4>Settings</h4>
            </div>
          </div>
        </div>

        <div>
          <div className=" ms-4 button-content-width ">
            <SelectButton
              value={value1}
              options={options}
              onChange={(e) => setValue1(e.value)}
            />
          </div>
        </div>
        {value1 === "General" && (
          <>
            <div className="row p-3  h-50 ">
              <div className="col-sm-6  ">
                <div className="card shadow height-content  ">
                  <div className="card-header">
                    <h4>Company Logo</h4>
                  </div>
                  <div className="card-body">
                    <div className="border h-100 rounded border-primary border-opacity-25">
                      <div className="border p-1 float-end me-4 rounded mt-3 fs-4 text-primary border-primary border-opacity-25 ">
                        <i className="bi bi-pencil-square"></i>
                      </div>

                      <h1 className="margin-height fs-1 fw-bold">Dleahr</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <Form>
                  <div className="card shadow height-content">
                    <div className="card-header">
                      <h4>Your Company</h4>
                    </div>
                    <div className="card-body">
                      <div className="col-11 m-auto ">
                        <div className="fs-6 fw-bold">company Name</div>
                        <Field
                          className="form-control p-4 mt-1 "
                          placeholder="Company name"
                          name="companyName"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="companyName" />
                        </small>
                      </div>
                      <div className="col-11 m-auto mt-2">
                        <div className="fs-6 fw-bold">Company Url</div>
                        <Field
                          className="form-control p-4 mt-1 "
                          placeholder="Company url"
                          name="companyUrl"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="companyUrl" />
                        </small>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-outline-success p-3 ms-4  fw-bold mt-3"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </>
        )}

        {value1 === "Time Off" && (
          <>
            <div>
              <div className="row ">
                <div className="col-sm-6 ">
                  <div className="card m-4 pay shadow height-content-card ">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <div className=" h-80px d-flex justify-content-between  align-items-center">
                        <h4>Festivals</h4>
                      </div>
                      <div className=" border p-1 float-end me-4 rounded fs-4 text-primary border-primary border-opacity-25 ">
                        
                        <Button
                          label=""
                          icon="pi pi-external-link"
                          onClick={() => onClick("displayBasic2")}
                        />
                        <Dialog
                          header="Company Default"
                          visible={displayBasic2}
                          style={{ width: "50vw" }}
                          footer={renderFooter("displayBasic2")}
                         
                          onHide={() => onHide("displayBasic2")}
                        >
                          <hr></hr>

                          <div>
                            <div>Festival name</div>
                            <div className="sizes ">
                              <InputText
                                type="text"
                                className="p-inputtext-lg block w-100 mt-1"
                                placeholder="Festivals"
                                onChange={onhandlerfestival}
                                value={festival}
                              />
                              <div className="mt-3">Year Start</div>
                              <InputText
                                type="date"
                                className="p-inputtext-lg block w-100  mt-1"
                                placeholder="enter the date"
                                
                                onChange={onhandlerdate}
                                value={date}
                              />
                            </div>
                          </div>

                          <br />

                          <br />
                        </Dialog>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between card-body p-5   align-items-center h-100 w-100 height-content-card">
                     
                      <table className="table table-hover text-center  ">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Festival</th>
                          </tr>
                        </thead>
                        <tbody>
                          {form.map((data,index) => {
                            return(

                          <tr key={index} >
                            <td>{data.date}</td>
                            <td>{data.festival}</td>
                            
                          </tr>
                            )
                          })}
                          <tr>
                            <td>19/09/2022</td>
                            <td>Vinayakachavithi</td>
                          </tr>
                          <tr>
                            <td>5/10/2022</td>
                            <td>Depavali</td>
                          </tr>
                          <tr>
                            <td>5/10/2022</td>
                            <td>Ramjon</td>
                          </tr>
                          <tr>
                            <td>20/11/2022</td>
                            <td>Sunday</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card m-4 pay shadow ">
                    <div className="card-header d-flex justify-content-between align-items-center ">
                      <div className="h-80px">
                        <h4>Working Week</h4>
                        <small> Set the dates that your company works.</small>
                      </div>
                      <div className=" border p-1 float-end me-4 rounded  fs-4 text-primary border-primary border-opacity-25 ">
                        
                        <div className="card">
                          <Button
                            label=""
                            icon="pi pi-external-link"
                            onClick={() => onClick("displayBasic")}
                          />
                          <Dialog
                            header="Edit Working Week"
                            visible={displayBasic}
                            style={{ width: "40vw" }}
                            footer={renderadd("displayBasic")}
                            onHide={() => onHide("displayBasic")}
                          >
                            <hr></hr>
                            <div className="p-4">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value={mon}
                                  checked={mon}
                                  onChange={() =>{
                                    setMon(!mon)}}
                                />
                                <label
                                  className="form-check-label "
                                  htmlFor="inlineCheckbox1"
                                  
                                >
                                  Mon
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  value={tue}
                                  checked={tue}
                                  onChange={() =>{
                                    setTue(!tue)}}
                                 
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  Tue
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2 "
                                  type="checkbox"
                                  id="inlineCheckbox3"
                                  value={wed}
                                  checked={wed}
                                  onChange={() =>{
                                    setWed(!wed)}}
                                 
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox3"
                                >
                                  Wed
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2"
                                  type="checkbox"
                                  id="inlineCheckbox4"
                                  
                                    value={thur}
                                    checked={thur}
                                    onChange={() =>{
                                      setThur(!thur)}}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox4"
                                >
                                  Thur
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2"
                                  type="checkbox"
                                  id="inlineCheckbox5"
                                  value={fri}
                                  checked={fri}
                                  onChange={() =>{
                                    setFri(!fri)}}
                                 
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox5"
                                >
                                  Fri
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2"
                                  type="checkbox"
                                  id="inlineCheckbox6"
                                  value={sat}
                                  checked={sat}
                                  onChange={() =>{
                                    setSat(!sat)}}
                                 
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox6"
                                >
                                  Sat
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input p-2"
                                  type="checkbox"
                                  id="inlineCheckbox7"
                                  value={sun}
                                  checked={sun}
                                  onChange={() =>{
                                    setSun(!sun)}}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox7"
                                >
                                  Sun
                                </label>
                              </div>
                            </div>
                          </Dialog>
                        </div>
                      </div>
                    </div>

                    <div className="card-body d-flex justify-content-between align-items-center p-5   w-100  height-content-card">
                      <div>
                        <button className={weekObj.mon ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>Mon</button>
                        <button className={weekObj.tue ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>
                          Tue
                        </button>
                        <button className={weekObj.wed ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>
                          Wed
                        </button>
                        <button className={weekObj.thur ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>
                          Thur
                        </button>
                        <button className={weekObj.fri ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>
                          Fri
                        </button>
                        <button className={weekObj.sat ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>
                          Sat
                        </button>
                        <button className={weekObj.sun ? 'btn btn-primary shadow ms-2':'btn btn-danger shadow ms-2'}>
                          Sun
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </Formik>
  );
}
