
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../style/adminNavbar.css'


function  AdminNavbar() {
  return (
    <div className="adminNavbar">
    <>
      
        <Navbar bg="info mr-5" className="mb-3">
       
            <Navbar.Brand href="#">AdminPortal</Navbar.Brand>
        
                <div className="navbar">
                  <ul>
                    <li> <Link id='k1' Link to="/admin/">Home</Link></li>
                    <li><Link id='k2' Link to="/admin/add-doctor">AddDoctor</Link></li>
                    <li><Link id='k3' className='text-warning bg-dark' Link to="/admin/add-patient">Appointment</Link></li>
                    <li><Link id='k4' Link to="/admin/show-patient">Show_Patient</Link></li>
                    <li><Link id='k5' Link to="/admin/show-doctors">Show_Doctor</Link></li>
                    <li><Link id='k6' className='text-danger' Link to="/">Logout</Link></li>
                  
                  </ul>
                </div>
        </Navbar>
    
    </>
    </div>
  );
}

export default AdminNavbar;