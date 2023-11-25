function EditEmployee({
  closeModal,
  selectedEmployee,
  setSelectedEmployee,
  editEmployee,
}) {
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
                  {/* last name input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Last Name"
                      value={selectedEmployee.lastname}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          lastname: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="lastname">Last Name</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {/* first name input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Last Name"
                      value={selectedEmployee.firstname}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          firstname: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="firstname">First Name</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {/*  age input */}
                  <section className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Age"
                      value={selectedEmployee.age}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          age: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="age">Age</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {/* gender input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      placeholder="Gender"
                      value={selectedEmployee.gender}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          gender: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="gender">Gender</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {/* email input */}
                  <section className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={selectedEmployee.email}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          email: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="email">Email</label>
                  </section>
                </div>

                <div className="col-md-6">
                  {/* mobile input */}
                  <section className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile"
                      value={selectedEmployee.mobile}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          mobile: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="mobile">Mobile</label>
                  </section>
                </div>

                <div className="col-md-12">
                  {/* date input */}
                  <section className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      placeholder="Date Hired"
                      value={selectedEmployee.date}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          date: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="date">Date Hired</label>
                  </section>
                </div>

                <div className="col-md-12">
                  {/* position input */}
                  <section className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="position"
                      placeholder="Position"
                      value={selectedEmployee.position}
                      onChange={(e) => {
                        selectedEmployee({
                          ...selectedEmployee,
                          position: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="position">Position</label>
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
