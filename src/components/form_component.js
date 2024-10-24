import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faFileExcel } from "@fortawesome/free-regular-svg-icons";
import {
  faCalculator,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Form({ handleformdata, setisSubmitted }) {
  const [freshCredit, setCredit] = useState(0);
  const [retake, setRetake] = useState(0);
  const [waiver, setWaiver] = useState(0);
  const [scholarship, setScholarship] = useState(0);
  const [lateFine, setLateFine] = useState(0);
  const [trimesterFee, setTrimesterFee] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmitted(false);
    handleformdata({ freshCredit, retake, waiver, scholarship, lateFine, trimesterFee });
    setisSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="m-2 my-3">
      <div className="row justify-content-between g-1">
        <div class="col-xl-5 form-floating mb-3 m-xl-0">
          <input
            type="number"
            class="form-control"
            id="newCredit"
            placeholder="New Credit"
            autoComplete="off"
            onChange={(e) => setCredit(Number(e.target.value))}
          ></input>
          <label htmlFor="newCredit">New Credit</label>
        </div>

        <div class="col-xl-5 form-floating mb-3 m-xl-0">
          <input
            type="number"
            class="form-control"
            id="retakeCredit"
            placeholder="Retake Credit"
            autoComplete="off"
            onChange={(e) => setRetake(Number(e.target.value))}
          ></input>
          <label htmlFor="retakeCredit">Retake Credit</label>
        </div>

        {/* waiver */}
        <div className="mt-3 d-xl-flex gap box-border col-xl-5 justify-content-between">
          <h5>
            <FontAwesomeIcon icon={faGraduationCap} className="me-1" /> Waiver
          </h5>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="waiver"
                id="wv100"
                value="1"
                onChange={(e) => setWaiver(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="wv100">
                100
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="waiver"
                id="wv50"
                value="0.5"
                onChange={(e) => setWaiver(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="wv50">
                50
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="waiver"
                id="wv25"
                value="0.25"
                onChange={(e) => setWaiver(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="wv25">
                25
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="waiver"
                id="wv0"
                value="0"
                onChange={(e) => setWaiver(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="wv0">
                0
              </label>
            </div>
          </div>
        </div>

        {/* scholarship */}
        <div className="mt-3 d-xl-flex gap box-border col-xl-5 justify-content-between">
          <h5>
            <FontAwesomeIcon icon={faGoogleScholar} className="me-1" />{" "}
            Scholarship
          </h5>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="scholarship"
                id="sc100"
                value="1"
                onChange={(e) => setScholarship(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="sc100">
                100
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="scholarship"
                id="sc50"
                value="0.5"
                onChange={(e) => setScholarship(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="sc50">
                50
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="scholarship"
                id="sc25"
                value="0.25"
                onChange={(e) => setScholarship(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="sc25">
                25
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="scholarship"
                id="sc0"
                value="0"
                onChange={(e) => setScholarship(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="sc0">
                0
              </label>
            </div>
          </div>
        </div>

        <div className="mt-3 d-xl-flex gap box-border col-xl-5 justify-content-between align-items-center">
          <h5 className="height-content">
            <FontAwesomeIcon icon={faFileExcel} className="me-2" />
            Late Registration
          </h5>
          <div className="height-content">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="late_fine"
                id="yes"
                value="1000"
                onChange={(e) => setLateFine(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="late_fine"
                id="no"
                value="0"
                onChange={(e) => setLateFine(Number(e.target.value))}
              ></input>
              <label class="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="mt-3 box-border col-xl-5 justify-content-between">
          <h5>Were you admitted after spring 2023 ?</h5>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="after_spring"
                id="s_yes"
                value="6500"
                onChange={(e) => {setTrimesterFee(Number(e.target.value))}}
              ></input>
              <label class="form-check-label" htmlFor="s_yes">
                Yes
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="after_spring"
                id="s_no"
                value="5000"
                onChange={(e) => {setTrimesterFee(Number(e.target.value))}}
              ></input>
              <label class="form-check-label" htmlFor="s_no">
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button type="submit" class="btn px-5 py-2 fw-bold">
          {" "}
          <FontAwesomeIcon icon={faCalculator} className="me-2" /> Calculate
        </button>
      </div>
    </form>
  );
}

export default Form;
