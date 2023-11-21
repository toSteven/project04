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
} from "firebase/firestore";

import AddEmployee from "./AddEmployee";

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
    station: "",
  });

  useEffect(() => {
    // initialize config
    const db = getFirestore(firebaseApp);

    // 🔹 READ DATA FROM FIREBASE 🔹
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

  const openModal = () => {
    setInputModalVisibility(true);
  };

  const closeModal = () => {
    setInputModalVisibility(false);
  };

  // 🔹 INPUT DATA FROM FIREBASE 🔹
  const addEmployee = () => {
    // initialize config
    const db = getFirestore(firebaseApp);

    // input config
    if (
      employee.lastname === "" ||
      employee.firstname === "" ||
      employee.age === "" ||
      employee.gender === "" ||
      employee.station === ""
    ) {
      alert("Missing fields!");
    } else {
      // set the input data to employee list state
      setEmployeeList((setList) => [...setList, employee]);

      // add employee list to db
      addDoc(collection(db, "database"), employee);

      // cleare flieds
      setEmployee({
        lastname: "",
        firstname: "",
        age: "",
        gender: "",
        station: "",
      });
    }
  };

  return (
    <main className="container m-5">
      <h1 className="display-3 text-center fw-bold m-3">Employee Records</h1>

      {/* Add Employee Section */}
      <section>
        <button className="btn btn-dark my-3" onClick={openModal}>
          + Add Employee
        </button>

        {inputModalVisible && (
          <AddEmployee
            closeModal={closeModal}
            employee={employee}
            setEmployee={setEmployee}
          />
        )}
      </section>

      {/* Search Employee Bar Section */}
      <section>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search employee..."
          value={searchEmployee}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      {/* Data Table Display Section */}
      <section className="card mt-4">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Station</th>
                <th>Action</th>
              </tr>
            </thead>

            {/*  Data  */}
            <tbody>
              {filteredEmployeeList.map((employee) => (
                <tr key={employee.employee_id}>
                  <td>{employee.lastname}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.age}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.station}</td>
                  <td>
                    <button className="btn btn-dark">Data</button>
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
