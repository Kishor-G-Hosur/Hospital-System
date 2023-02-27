import AdminNavbar from "./adminNavbar";
import AdminDashBoard from "./adminDashBoard";
import {Routes, Route } from "react-router-dom";
import AddDoctor from "./addDoctor";
import ShowDoctor from "./showDoctor";
import AddUser from "./addUser";
import ShowUser from "./showUser";

const AdminPortal = () => {
    return ( 
        <div className="adminportal">
        <AdminNavbar/>
        <Routes>
        <Route path="/" element={<AdminDashBoard/>}/>
        <Route path="/add-doctor" element={<AddDoctor/>}/>
        <Route path="/show-doctor" element={<ShowDoctor/>}/>
        <Route path="/add-patient" element={<AddUser/>}/>
        <Route path="/show-user" element={<ShowUser/>}/>
        <Route path='/show-doctors' element={<ShowDoctor/>}/>
        <Route path='/show-patient' element={<ShowUser/>}/>
    
       
      </Routes>
        </div>
     );
}
 
export default AdminPortal;