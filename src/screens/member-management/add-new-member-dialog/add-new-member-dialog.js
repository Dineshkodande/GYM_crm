import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import $ from "jquery";
const AddNewMember = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="dialog-app-1">
        <div className="modal-header p-0 pb-10">
          <div className="block">
            <h4 className="float-start fw-6 fs-18 title-muted m-0 head-edit">
              <span className="float-start">Add New Member</span>
            </h4>
            <a
              className="btn btn-link btn-radius float-end"
              onClick={handleClose}
            >
              <i className="fa fa-times-circle fs-18" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="block mt-10 form-scroll">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="firstName" className="form-label">
                  First Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="MiddleName" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="MiddleName"
                  name="MiddleName"
                  placeholder="Middle Name"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="emailId" className="form-label">
                  Email ID<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="emailId"
                  name="emailId"
                  placeholder="Email ID"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="ContactNo" className="form-label">
                  Contact No.<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="ContactNo"
                  name="ContactNo"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="EmergencyContactNo" className="form-label">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="EmergencyContactNo"
                  name="EmergencyContactNo"
                  placeholder="Emergency Contact No."
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="Date of birth" className="form-label">
                Date of birth<span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control input-sm"
                  id="dob"
                  name="dob"
                  placeholder="Date of birth"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="Gender" className="form-label">
                  Gender<span className="text-danger">*</span>
                </label>
              <select className="form-control input-sm">
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="member-name" className="form-label">
                 Batch Schedule
                </label>
                <select className="form-control input-sm">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="Height" className="form-label">
                  Height
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="Height"
                  name="Height"
                  placeholder="160CM"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="Weight" className="form-label">
                  Weight
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="Weight"
                  name="Weight"
                  placeholder="60 KG"
                  required
                />
              </div>
            
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="BloodGroup" className="form-label">
                 Blood Group
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="BloodGroup"
                  name="BloodGroup"
                  placeholder="Blood Group"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor=" MedicalCondition" className="form-label">
                  Medical Condition
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="MedicalCondition"
                  name="MedicalCondition"
                  placeholder=" Medical Condition"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="Goal" className="form-label">
                  Goal
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="Goal"
                  name="Goal"
                  placeholder="Goal"
                  required
                />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-15 float-start">
                <label htmlFor="Referred By" className="form-label">
                  Referred By
                </label>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="Referred By"
                  name="Referred By"
                  placeholder="Referred By"
                  required
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-15 float-start">
                <label htmlFor="Notes" className="form-label">
                 Notes
                </label>
                <textarea
                  type="text"
                  className="form-control input-sm"
                  id="Notes"
                  name="Notes"
                  placeholder="Notes"
                  required
                />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-15 float-start">
                <label htmlFor="Address" className="form-label">
                  Address
                </label>
                <textarea
                  type="text"
                  className="form-control input-sm"
                  id="Address"
                  name="Address"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="container-fluid block mt-10">
              <div className="row">
                <div className="block align-center place-end">
                  <a
                    className="btn btn-sm btn-link btn-radius float-start"
                    onClick={handleClose}
                  >
                   CANCEL
                  </a>
                  <a
                    className="btn btn-sm btn-primary btn-radius float-start pl-20 pr-20 next-step"
                    id="step2"
                  >
                    SAVE
                  </a>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default AddNewMember;
