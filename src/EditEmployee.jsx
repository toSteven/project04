function EditEmployee({ closeModal }) {
  return (
    <>
      <section className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content shadow">
            <section className="modal-header bg-secondary">
              <h1 className="modal-title text-white">Edit Employee</h1>
              {/* close modal button */}
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </section>

            <section className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  {/* last name input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastname">Last Name</label>
                  </section>
                </div>
                <div className="col-md-6">
                  {" "}
                  {/* first name input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstname">First Name</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {" "}
                  {/* age input */}
                  <section className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Age"
                      min={18}
                    />
                    <label htmlFor="age">Age</label>
                  </section>
                </div>
                <div className="col-md-6">
                  {" "}
                  {/* gender input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      placeholder="Gender"
                    />
                    <label htmlFor="gender">Gender</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {" "}
                  {/* email input */}
                  <section className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {" "}
                  {/* mobile number input */}
                  <section className="form-floating mb-3">
                    <input
                      type="tel"
                      pattern="[[0-9]{3}-[0-9]{3}-[0-9]{5}"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile No."
                    />
                    <label htmlFor="mobile">Mobile No.</label>
                  </section>
                </div>

                <div className="col-md-12">
                  {" "}
                  {/* address input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                    />
                    <label htmlFor="address">Address</label>
                  </section>
                </div>

                <div className="col-md-12">
                  {" "}
                  {/* date input */}
                  <section className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      placeholder="Date Hired"
                    />
                    <label htmlFor="date">Date Hired</label>
                  </section>
                </div>

                <div className="col-md-12">
                  {" "}
                  {/* position input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="position"
                      placeholder="Position"
                    />
                    <label htmlFor="station">Position</label>
                  </section>
                </div>
              </div>
            </section>

            {/* submit button */}
            <section className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-success text-center ">
                Confirm
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditEmployee;
