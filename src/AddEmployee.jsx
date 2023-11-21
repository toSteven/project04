function AddEmployee({ closeModal, employee, setEmployee }) {
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

              {/* age input */}
              <section className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Age"
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddEmployee;
