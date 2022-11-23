import "./Settings.css";
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Settings() {
  const [value1, setValue1] = useState("General");
  const options = ["General", "Time Off"];
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [position, setPosition] = useState("center");

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
          // icon="pi pi-times"
          onClick={() => onHide(name)}
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
    <>
      <div className="card m-4 pay shadow ">
        <div className="card-body d-flex justify-content-between ">
          <div>
            <div className="fs-5 ms-2"> Home /settings </div>
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
      {value1 === 'General' && <>
        <div className="row p-4 h-50 mb-4">
          <div className="col-sm-6  ">
            <div className="card shadow height-content">
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
            <div className="card shadow height-content">
              <div className="card-header">
                <h4>Your Company</h4>
              </div>
              <div className="card-body">
                <div className="col-11 m-auto ">
                  <div className="fs-6 fw-bold">company Name</div>
                  <input
                    className="form-control p-4 mt-1 "
                    placeholder="Company name"
                  />
                </div>
                <div className="col-11 m-auto mt-2">
                  <div className="fs-6 fw-bold">Company Url</div>
                  <input
                    className="form-control p-4 mt-1 "
                    placeholder="Company url"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-success p-3 ms-4  fw-bold mt-3"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>}

      {value1 === 'Time Off' && <>
        <div>
          <div className="row ">
            <div className="col-sm-6 ">
              <div className="card m-4 pay shadow height-content-card ">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className=" h-80px ">
                    <h4>Company Default</h4>
                  </div>
                  <div className=" border p-1 float-end me-4 rounded fs-4 text-primary border-primary border-opacity-25 ">
                    {/* <i className="bi bi-pencil-square"></i> */}
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
                      // icon="pi pi-times"
                      // className="p-button-rounded p-button-danger"
                      // aria-label="Cancel"
                      onHide={() => onHide("displayBasic2")}
                    >
                      <hr></hr>

                      <div>
                        <div>Time Off Allowance</div>
                        <div className="sizes ">
                          <InputText
                            type="text"
                            className="p-inputtext-lg block w-100"
                            placeholder="25 days"
                          />
                          <div className="mt-3">Year Start</div>
                          <InputText
                            type="text"
                            className="p-inputtext-lg block w-100 "
                            placeholder="01-01-2021"
                          />
                        </div>
                      </div>

                      <br />

                      <br />
                    </Dialog>
                  </div>
                </div>

                <div className="d-flex justify-content-between card-body p-5   align-items-center h-100 w-100 height-content-card">
                  <div className="ps-3">Allowance</div>
                  <div className="fw-bold text-primary">25 Days</div>
                  <div>Year Start</div>
                  <div className="fw-bold text-primary pe-3">01 January</div>
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
                    {/* <i className="bi bi-pencil-square"></i> */}
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
                        footer={renderFooter("displayBasic")}
                        onHide={() => onHide("displayBasic")}
                      >
                        <hr></hr>
                        <div className="p-4">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            />
                            <label className="form-check-label " htmlFor="inlineCheckbox1">
                              Mon
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2"
                              type="checkbox"
                              id="inlineCheckbox2"
                              value="option2"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                              Tue
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2 "
                              type="checkbox"
                              id="inlineCheckbox3"
                              value="option3"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">
                              Wed
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2"
                              type="checkbox"
                              id="inlineCheckbox4"
                              value="option3"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox4">
                              Thur
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2"
                              type="checkbox"
                              id="inlineCheckbox5"
                              value="option3"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox5">
                              Fri
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2"
                              type="checkbox"
                              id="inlineCheckbox6"
                              value="option3"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox6">
                              Sat
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input p-2"
                              type="checkbox"
                              id="inlineCheckbox7"
                              value="option3"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox7">
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
                    <button className="btn btn-primary shadow">Mon</button>
                    <button className="btn btn-primary ms-2 shadow">Tue</button>
                    <button className="btn btn-primary ms-2 shadow">Wed</button>
                    <button className="btn btn-primary ms-2 shadow">Thur</button>
                    <button className="btn btn-primary ms-2 shadow">Fri</button>
                    <button className="btn btn-danger ms-2 shadow">Sat</button>
                    <button className="btn btn-danger ms-2 shadow">Sun</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>}

    </>
  );
}
