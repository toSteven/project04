// props of close moodal & employee state
function ViewEmployee({ closeModal, employee }) {
  return (
    <>
      <section className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content shadow">
            <section className="modal-header bg-secondary">
              <h1 className="modal-title text-white">Employee Data</h1>
              {/* close modal button */}
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </section>

            {/* employee data */}
            <section className="modal-body fw-bold">
              <p>Last Name: {employee.lastname}</p>
              <p>First Name: {employee.firstname}</p>
              <p>Age: {employee.age}</p>
              <p>Gender: {employee.gender}</p>
              <p>Email: {employee.email}</p>
              <p>Mobile No: {employee.mobile}</p>
              <p>Address: {employee.address}</p>
              <p>Date Hired: {employee.date}</p>
              <p>Position: {employee.position}</p>
            </section>

            {/* close button */}
            <section className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-dark text-center "
                onClick={closeModal}
              >
                Done
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewEmployee;
