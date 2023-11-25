import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./Config";

function EditEmployee({ closeModal, selectedEmployee, setSelectedEmployee }) {
  // 🔹 FEDIT DATA FOR FIREBASE 🔹
  const editEmployee = async () => {
    try {
      // initialize config
      const db = getFirestore(firebaseApp);
      const employeeRef = doc(db, "database", selectedEmployee.employee_id);

      // get data from fetch data edit
      const updatedEmployee = {
        lastname: selectedEmployee.lastname,
        firstname: selectedEmployee.firstname,
        age: selectedEmployee.age,
        gender: selectedEmployee.gender,
        email: selectedEmployee.email,
        mobile: selectedEmployee.mobile,
        address: selectedEmployee.address,
        date: selectedEmployee.date,
        position: selectedEmployee.position,
      };

      // update to db
      await updateDoc(employeeRef, updatedEmployee);

      alert("Update successful!");
      closeModal();
    } catch (error) {
      alert("Update failed!");
    }
  };

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
                      type="address"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      value={selectedEmployee.address}
                      onChange={(e) => {
                        setSelectedEmployee({
                          ...selectedEmployee,
                          address: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="address">Address</label>
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
                        setSelectedEmployee({
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
              <button
                type="button"
                className="btn btn-success text-center "
                onClick={editEmployee}
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

export default EditEmployee;
