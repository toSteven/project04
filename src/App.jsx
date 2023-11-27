import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import DashBoard from "./DashBoard";
import NotFound from "./NotFound";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import ViewEmployee from "./ViewEmployee";
import LogIn from "./LogIn";
import Register from "./Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoard />}></Route>
            <Route path="viewEmployee" element={<ViewEmployee />}></Route>
            <Route path="addEmployee" element={<AddEmployee />}></Route>
            <Route path="editEmployee" element={<EditEmployee />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
