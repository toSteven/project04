import { useEffect, useState } from "react";
import firebaseApp from "./Config";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

function DashBoard() {
  // employee list state
  const [employeeList, setEmployeeList] = useState([]);

  // search state
  const [searchEmployee, setSearchQuery] = useState("");

  const filteredEmployeeList = employeeList.filter((employee) => {
    const fullName = `${employee.lastname} ${employee.firstname}`.toLowerCase();
    return fullName.includes(searchEmployee.toLowerCase());
  });

  useEffect(() => {
    // init config
    const db = getFirestore(firebaseApp);

    // READ DATA FROM FIREBASE
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

  return (
    <main className="container m-5">
      <h1 className="display-3 text-center fw-bold m-3">Employee Records</h1>

      {/* Searc Employee Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search employee..."
        value={searchEmployee}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Data Table Display */}
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
