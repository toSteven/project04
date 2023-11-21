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
            <div className="modal-header">
              <h1 className="modal-title">Add Employee</h1>
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

                <div className="col-md-12">
                  {" "}
                  {/* station input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="station"
                      placeholder="Station"
                      value={employee.station}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          station: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="station">Station</label>
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
