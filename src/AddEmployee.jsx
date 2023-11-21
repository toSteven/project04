function AddEmployee({ closeModal, employee, setEmployee, addEmployee }) {
  return (
    <>
      <section
        className="modal mt-5"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content shadow">
            <div className="modal-header bg-secondary">
              <h1 className="modal-title text-white">Add Employee</h1>
              {/* close modal button */}
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            {/* input forms */}
            <div className="modal-body">
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
                      value={employee.lastname}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          lastname: e.target.value,
                        });
                      }}
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
                      value={employee.firstname}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          firstname: e.target.value,
                        });
                      }}
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
                      value={employee.age}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          age: e.target.value,
                        });
                      }}
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
                      value={employee.gender}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          gender: e.target.value,
                        });
                      }}
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
                      value={employee.email}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          email: e.target.value,
                        });
                      }}
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
                      value={employee.mobile}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          mobile: e.target.value,
                        });
                      }}
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
                      placeholder="Station"
                      value={employee.address}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          address: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="address">Address</label>
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
                      placeholder="Station"
                      value={employee.station}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          position: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="station">Position</label>
                  </section>
                </div>
              </div>
            </div>

            {/* submit button */}
            <section className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success text-center "
                onClick={() => {
                  addEmployee();
                  closeModal();
                }}
              >
                Confirm
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddEmployee;
