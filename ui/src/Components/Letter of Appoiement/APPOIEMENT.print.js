import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function PrintAppoiement(props) {
  let AppointmentData = props.appoiementsendData;
  const componentRef = useRef();
  const [style, setStyle] = useState(false);
  const handlePrint = useReactToPrint({
    content: () => {
      let newClass = document.getElementById("apooiement-letter").classList;
      newClass.add("w-100");
      setStyle(true);
      return componentRef.current;
    },

    documentTitle: "appoiement-data",
  });
  useEffect(()=>{
    let newClass = document.getElementById("apooiement-letter").classList;
    newClass.remove("w-100");
    setStyle(false);
  },[style])
  return (
    <>
      <div>
        <button
          className="btn btn-outline-dark float-end m-3"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <div
          id="apooiement-letter"
          className="bg-white w-75 m-auto shadow border p-3"
        >
          <div className="border-bottom p-3">
            <div className="">
              <h5 className="text-end me-3">{AppointmentData.companyName}</h5>
              <h6 className="text-end me-3">
                {AppointmentData.companyAddress}
              </h6>
              <h6 className="text-end me-3 ">524421, Andhra Pradesh, 524421</h6>
            </div>
          </div>

          <div className="float-end me-5 mt-3 ">
            <b>{AppointmentData.currentDate}</b>
          </div>
          <div className="mt-5 fs-2  text-center">
            <b> Letter of Appointment </b>
          </div>
          <div className="p-5">
            <p>
              Dear <b> {AppointmentData.employeeName},</b>
            </p>
            <div>
              Appointment as <b>{AppointmentData.jobTitle}</b>
            </div>
            <div>
              <p>
                We refer to your recent interview for the position and are
                please to advise that we are offering you the position with
                <span className="ms-1 fw-bold">
                  {AppointmentData.companyName}
                </span>{" "}
                effective from {AppointmentData.employeeJoiningDate} under the
                following terms and conditions:
              </p>
            </div>

            <div>
              <h5>1. Posting and Transfer</h5>
              <p>
                Your services are liable to be transferred, at the sole
                discretion of Management, in such other capacity as the company
                may determine, to any department / section, location, associate,
                sister concern or subsidiary, at any place in India or abroad,
                whether existing today or which may come up in future. In such a
                case, you will be governed by the terms and conditions of the
                service applicable at the new placement location.
              </p>
              <h5>2. Probation</h5>
              <p>
                That you will be on probation for a period of six months. The
                period of probation can be extended at the discretion of the
                Management and you will continue to be on probation till an
                order of confirmation has been issued in writing.
              </p>
              <h5>3. Full time employment</h5>
              <p>
                Your position is a whole time employment with the Company and
                you shall devote yourself exclusively to the business and
                interests of the company. You will not take up any other work
                for remuneration (part time or otherwise) or work in an advisory
                capacity, or be interested directly or indirectly (except as
                shareholder / debenture holder), in any other trade or business
                during your employment with the company, without permission in
                writing of the Management of the Company. You will also not seek
                membership of any local or public bodies without first obtaining
                specific permission from the Management.
              </p>
              <h5>4. Confidentiality</h5>
              <p>
                You will not, at any time, during the employment or after,
                without the consent of the Management disclose or divulge or
                make public, except on legal obligations, any information
                regarding the Company’s affairs or administration or research
                carried out, whether the same is confided to you or becomes
                known to you in the course of your service or otherwise.
              </p>
              <h5>5. Intellectual Property</h5>
              <p>
                If you conceive any new or advanced method of improving designs/
                processes/ formulae/ systems, etc. in relation to the business/
                operations of the Company, such developments will be fully
                communicated to the company and will be, and remain, the sole
                right/ property of the Company.
              </p>
              <h5>6. Responsibilities & Duties</h5>
              <p>
                Your work in the organization will be subject to the rules and
                regulations of the organization as laid down in relation to
                conduct, discipline and other matters. You will always be alive
                to responsibilities and duties attached to your office and
                conduct yourself accordingly. You must effectively perform to
                ensure results.
              </p>
              <h5>7. Past Records</h5>
              <p>
                This letter of appointment is based on the information furnished
                in your application for employment and during the interviews you
                had with us. If any declaration given, or information furnished
                by you, to the company proves to be false, or if you are found
                to have willfully suppressed any material information, in such
                cases, you will be liable to removal from services without any
                notice.
              </p>
              <h5>8. Termination of employment</h5>
              <p>
                <p>
                  During the probationary period and any extension thereof, your
                  services may be terminated without giving any notice or salary
                  in lieu thereof. However, on confirmation the services can be
                  terminated from either side by giving one month (30 days)
                  notice or salary in lieu thereof.
                </p>
                <p>
                  During the probationary period and any extension thereof, your
                  services may be terminated without giving any notice or salary
                  in lieu thereof. However, on confirmation the services can be
                  terminated from either side by giving one month (30 days)
                  notice or salary in lieu thereof.
                </p>
                <p>
                  Upon resignation/termination of employment, you will also
                  return all company property, which may be in your possession.
                </p>

                <div>
                  <ul>
                    <li>
                      If you fail, refuse or neglect to carry out and perform
                      your duties assigned to you by the company.
                    </li>
                    <li>
                      For loss of confidence in you by the company for any of
                      the act committed by you.
                    </li>
                    <li>
                      If you are found to be guilty of fraud, insubordination or
                      misconduct whether in course of performance of duties
                      entrusted to you or otherwise.
                    </li>
                    <li>
                      If you are found unfit for being entrusted with the
                      responsible work commensurate with your position in
                      consequences of any misconduct, moral turpitude. * If you
                      commit any act prejudicial to the continuing good
                      relationship between you and the company.
                    </li>
                    <li>
                      If you are found unfit for being entrusted with the
                      responsible work commensurate with your position in
                      consequences of any misconduct, moral turpitude. * If you
                      commit any act prejudicial to the continuing good
                      relationship between you and the company.
                    </li>
                  </ul>
                </div>
              </p>
              <h5>9. Authority</h5>
              <p>
                No authority is vested upon you to make any financial commitment
                and enter into agreements/contracts/understandings of any nature
                with any second party and third party without seeking the prior
                permission/approval of the management. Any violation to exceed
                your specified authority as mentioned will be seriously viewed
                and disciplinary/appropriate legal action will be taken.
              </p>
            </div>
            <div>
              <p>
                If you agree to the above terms and conditions of the
                appointment, kindly confirm your acceptance by signing and
                returning the duplicate copy of this letter for our file and
                records.
              </p>
            </div>
            <div>
              <div>Sincerely, </div>
              <div className="mt-3">
                <b>{AppointmentData.hrName}</b>
              </div>
              <div>hr</div>
              <div>{AppointmentData.companyName}</div>
            </div>
            <div className="mt-5">
              <div className="mb-3">
                I agree to the appointment and accept the above terms and
                conditions of service
              </div>
              <div>Name: {AppointmentData.employeeName}</div>
              <div>Employee ID : TRINITS-2</div>
              <div>Date: {AppointmentData.acceptanceLastDate}</div>
              <div className="mt-3">
                Signature: ...................................
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
