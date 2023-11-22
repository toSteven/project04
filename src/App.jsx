import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import DashBoard from "./Dashboard";
import NotFound from "./NotFound";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoard />}></Route>
            <Route path="addEmployee" element={<AddEmployee />}></Route>
            <Route path="editEmployee" element={<EditEmployee />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
