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
              <h1>Modal Data Here...</h1>
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
