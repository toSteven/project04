import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import firebaseApp from "./Config";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

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
    const fullName = `${employee.lastname} ${employee.firstname}`.toLowerCase();
    return fullName.includes(searchEmployee.toLowerCase());
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

  useEffect(() => {
    // initialize config
    const db = getFirestore(firebaseApp);

    // 🔹 FETCH DATA FROM FIREBASE 🔹
    try {
      onSnapshot(
        query(collection(db, "database"), orderBy("lastname", "asc")),
        (snapshot) => {
          const snapList = [];

          snapshot.forEach((data) => {
            const getEmployeeData = data.data();
            getEmployeeData["employee_id"] = data.id;
            snapList.push(getEmployeeData);
          });
          setEmployeeList(snapList);
        }
      );
    } catch (error) {
      alert("Can't fetch data from firebase!");
    }
  }, []);

  // input modal state
  const [inputModalVisible, setInputModalVisibility] = useState(false);

  // inpute modal open
  const openInputModal = () => {
    setInputModalVisibility(true);
  };

  // inpute modal close
  const closeInputModal = () => {
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
      return date.toDate().toLocaleDateString();
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

  // selected employee state as prop for state on employee state
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Function to open the ViewEmployee modal
  const openViewModal = (employee) => {
    setSelectedEmployee(employee); // props to pass
    setViewModalVisibility(true);
  };

  // Function to close the ViewEmployee modal
  const closeViewModal = () => {
    setSelectedEmployee(null);
    setViewModalVisibility(false);
  };

  // edit modal state
  const [editModalVisible, setEditModalVisibility] = useState(false);

  // edit modal open
  const openEditModal = (employee) => {
    setSelectedEmployee(employee); // props to pass
    setEditModalVisibility(true);
  };

  // edit modal close
  const closeEditModal = () => {
    setEditModalVisibility(false);
  };

  // 🔹 FETCH DATA FOR EDIT MODAL FROM FIREBASE 🔹
  const fetchEmployee = () => {
    // initialize config
    const db = getFirestore(firebaseApp);

    try {
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
      alert("Cant getch data!");
    }
  };

  return (
    <main className="container m-5">
      <h1 className="display-3 text-center fw-bold my-3">Employee Records</h1>

      {/* Top Controls */}
      <section class="navbar bg-secondary rounded-3">
        <div class="container-fluid">
          {/* Add Employee Section */}
          <section className="me-3">
            <button className="btn btn-dark rounded-3" onClick={openInputModal}>
              + Add Employee
            </button>

            {inputModalVisible && (
              <AddEmployee
                closeModal={closeInputModal}
                employee={employee}
                setEmployee={setEmployee}
                addEmployee={addEmployee}
              />
            )}
          </section>
          <form class="d-flex">
            {/* Search Employee Bar Section */}
            <section>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Search employee..."
                value={searchEmployee}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </section>
          </form>
        </div>
      </section>

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
              {filteredEmployeeList.map((employee) => (
                <tr key={employee.employee_id}>
                  <td>{employee.lastname}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.position}</td>
                  <td>
                    {/* Show Data */}
                    <button
                      className="btn btn-dark m-2"
                      onClick={() => openViewModal(employee)}
                    >
                      Data
                    </button>
                    {/* Employee Data Modal */}
                    {viewModalVisible && (
                      <ViewEmployee
                        closeModal={closeViewModal}
                        employee={selectedEmployee}
                      />
                    )}

                    {/* Edit Data */}
                    <button
                      className="btn btn-dark m-2"
                      onClick={() => openEditModal(employee)}
                    >
                      Edit
                    </button>
                    {editModalVisible && (
                      <EditEmployee
                        closeModal={closeEditModal}
                        selectedEmployee={selectedEmployee}
                        setSelectedEmployee={setSelectedEmployee}
                      />
                    )}

                    {/* Delete Data */}
                    <button
                      className="btn btn-dark m-2"
                      onClick={() => deleteEmployee(employee.employee_id)}
                    >
                      Delete
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
}

export default DashBoard;
