// react imports
import { useEffect, useState } from "react";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// firebase config import
import firebaseApp from "./Config";

// fire base import
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// font awsome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

// component import
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import ViewEmployee from "./ViewEmployee";

function DashBoard() {
  // employee list state
  const [employeeList, setEmployeeList] = useState([]);

  // search state
  const [searchEmployee, setSearchQuery] = useState("");

  // filtered search employee list function
  const filteredEmployeeList = employeeList.filter((employee) => {
    const fullName = `${employee.lastname} ${employee.firstname}`.toLowerCase(); // get data by lastname or firstname
    return fullName.includes(searchEmployee.toLowerCase()); // return as search data
  });

  // employee object state
  const [employee, setEmployee] = useState({
    lastname: "",
    firstname: "",
    age: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    date: "",
    position: "",
  });

  // credential state
  const [credential, setCredential] = useState(false);

  useEffect(() => {
    // initialize config
    const db = getFirestore(firebaseApp);

    // 🔹 FETCH DATA TO SHOW ON TABLE FROM FIREBASE 🔹
    try {
      onSnapshot(
        // fetch data orber by asc
        query(collection(db, "database"), orderBy("lastname", "asc")),
        (snapshot) => {
          const snapList = []; // snap variable

          snapshot.forEach((data) => {
            const getEmployeeData = data.data(); // get data
            getEmployeeData["employee_id"] = data.id; // get id
            snapList.push(getEmployeeData); // push the data get to snap variable
          });
          setEmployeeList(snapList); // set to employee state
        }
      );
    } catch (error) {
      alert("Can't fetch data from firebase!"); // error msg
    }

    // 🔹 CREDENTIALS CONFIG 🔹

    // initialize auth
    const auth = getAuth(firebaseApp);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCredential(true);
        const uid = user.uid;
      } else {
        setCredential(false);
      }
    });
  }, []);

  // input modal state
  const [inputModalVisible, setInputModalVisibility] = useState(false);

  // inpute modal open
  const openInputModal = () => {
    // show input modal
    setInputModalVisibility(true);
  };

  // inpute modal close
  const closeInputModal = () => {
    // close input modal
    setInputModalVisibility(false);

    // cleare flieds
    setEmployee({
      lastname: "",
      firstname: "",
      age: "",
      gender: "",
      email: "",
      mobile: "",
      address: "",
      date: "",
      position: "",
    });
  };

  // date to string function
  const formatDate = (date) => {
    if (date && date.toDate) {
      return date.toDate().toLocaleDateString(); // return date as a string
    }
    return "";
  };

  // 🔹 ADD DATA FROM FIREBASE 🔹
  const addEmployee = () => {
    // initialize config
    const db = getFirestore(firebaseApp);

    // input config
    if (
      employee.lastname === "" ||
      employee.firstname === "" ||
      employee.age === "" ||
      employee.gender === "" ||
      employee.email === "" ||
      employee.mobile === "" ||
      employee.address === "" ||
      employee.date === "" ||
      employee.position === ""
    ) {
      alert("Missing fields!");
    } else {
      // set the input data to employee list state
      setEmployeeList((setList) => [...setList, employee]);

      // add employee list to db
      addDoc(collection(db, "database"), employee);

      alert(
        // pop up msg
        `${employee.lastname} ${employee.firstname} added employee as ${employee.position} at ${employee.date}`
      );

      // cleare flieds
      setEmployee({
        lastname: "",
        firstname: "",
        age: "",
        gender: "",
        email: "",
        mobile: "",
        address: "",
        date: "",
        position: "",
      });
    }
  };

  // 🔹 DELETE DATA FROM FIREBASE 🔹
  const deleteEmployee = (employee_id) => {
    // initialize config
    const db = getFirestore(firebaseApp);

    // confirmation pop up
    const userConfirmed = window.confirm(
      `Are you sure you want to delete records ?`
    );

    // delete config
    if (userConfirmed) {
      // delete from db
      deleteDoc(doc(db, "database", employee_id));
      alert("Record deleted !");
    }
  };

  // 🔹 VIEW DATA FROM FIREBASE 🔹

  // view modal state
  const [viewModalVisible, setViewModalVisibility] = useState(false);

  // selected employee state  as thresh for state on employee state
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Function to open the ViewEmployee modal
  const openViewModal = (employee) => {
    setSelectedEmployee(employee); // props to pass
    setViewModalVisibility(true); // show view modal
  };

  // Function to close the ViewEmployee modal
  const closeViewModal = () => {
    setSelectedEmployee(null); // set props to null
    setViewModalVisibility(false); // close view modal
  };

  // edit modal state
  const [editModalVisible, setEditModalVisibility] = useState(false);

  // edit modal open
  const openEditModal = (employee) => {
    setSelectedEmployee(employee); // props to pass
    setEditModalVisibility(true); // show edit modal
  };

  // edit modal close
  const closeEditModal = () => {
    setEditModalVisibility(false); // close edit modal
  };

  // 🔹 FETCH DATA FOR EDIT MODAL FROM FIREBASE 🔹
  const fetchEmployee = () => {
    // initialize config
    const db = getFirestore(firebaseApp);

    try {
      // congif doc
      const employeeRef = doc(db, "database", selectedEmployee.employee_id);

      // fetch data to show data of employee to edit
      const updatedEmployee = {
        lastname: selectedEmployee.lastname,
        firstname: selectedEmployee.firstname,
        age: selectedEmployee.age,
        lastname: selectedEmployee.lastname,
        gender: selectedEmployee.gender,
        email: selectedEmployee.email,
        mobile: selectedEmployee.mobile,
        address: selectedEmployee.address,
        date: selectedEmployee.date,
        position: selectedEmployee.position,
      };
    } catch (error) {
      alert("Cant getch data!"); // pop up msg
    }
  };

  if (credential) {
    return (
      <main className="container m-5">
        <h1 className="display-3 text-center my-3">Employee Records</h1>

        {/* Top Controls */}
        <nav class="navbar bg-secondary rounded-3">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              {/* Add Employee Section */}
              <section className="me-3">
                <button
                  className="btn btn-dark rounded-3"
                  onClick={openInputModal}
                >
                  + Add Employee
                </button>

                {inputModalVisible && (
                  <AddEmployee
                    closeModal={closeInputModal} // pass close input modal function as props
                    employee={employee} // pass  employee state  as props
                    setEmployee={setEmployee} // pass  setemployee state  as props
                    addEmployee={addEmployee} // pass  addemployee function  as props
                  />
                )}
              </section>

              {/* Search Employee Bar Section */}
              <section>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Search employee..."
                  value={searchEmployee} // set value as search employee
                  onChange={(e) => setSearchQuery(e.target.value)} // set input as value
                />
              </section>
            </form>
          </div>
        </nav>

        {/* Data Table Display Section */}
        <section className="card mt-3">
          <div className="card-body">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/*  Data  */}
              <tbody>
                {/* Show Filtered Data */}
                {filteredEmployeeList.map((employee) => (
                  <tr key={employee.employee_id}>
                    <td>{employee.lastname}</td>
                    <td>{employee.firstname}</td>
                    <td>{employee.position}</td>
                    <td>
                      {/* Show Data */}
                      <button
                        className="btn m-2"
                        onClick={() => openViewModal(employee)} //pass open view modal function as props
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ color: "#000000" }}
                        />
                      </button>
                      {/* Employee Data Modal */}
                      {viewModalVisible && (
                        <ViewEmployee
                          closeModal={closeViewModal} //pass close view modal function as props
                          employee={selectedEmployee} //pass thesh state as props
                        />
                      )}

                      {/* Edit Data */}
                      <button
                        className="btn m-2"
                        onClick={() => openEditModal(employee)} //pass open edit modal function as props
                      >
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "#000000" }}
                        />
                      </button>
                      {/* Edit Employee Modal */}
                      {editModalVisible && (
                        <EditEmployee
                          closeModal={closeEditModal} //pass close edit modal function as props
                          selectedEmployee={selectedEmployee} //pass thesh state as props
                          setSelectedEmployee={setSelectedEmployee} //pass set thesh state as props
                        />
                      )}

                      {/* Delete Data */}
                      <button
                        className="btn m-2"
                        onClick={() => deleteEmployee(employee.employee_id)} //pass delete function as props
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#000000" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    );
  } else {
    return;
  }
}

export default DashBoard;
