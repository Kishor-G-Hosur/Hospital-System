import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Form  from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import '../style/adduser.css'
        function AddUser() {
   
            let [name,setName]=useState()
            let [age,setAge]=useState()
            let [appointment,setappointment]=useState()
            let [email,setEmail]=useState()
            let [contact,setContact]=useState()
            let [disease,setdisease]=useState()
            let [address,setAddress]=useState()
            let [state,setState]=useState()
            
        
          let navigate=useNavigate()
          
        
            let submit=(e)=>
            {
              e.preventDefault();
              let patient={name,age,appointment,email,contact,disease,address,state}
               fetch(' http://localhost:2000/patient',{
                  method:"POST",
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify(patient)
              })
              navigate('/admin/show-patient')
            }
          return (
            <div className="addDoctor ">
              <div className="patient1">
            <Form onSubmit={submit}>
              
              <Row className=" w-25 m-4">
        
              <Form.Label>name</Form.Label>
                  <Form.Control type="text" required  placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
    
        
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="date" required placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} />

                  <Form.Label>appointment</Form.Label>
                  <Form.Control type="date" required placeholder="Enter appointment" value={appointment} onChange={(e)=>setappointment(e.target.value)} />
                
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              
              </Row>
              <Row className=" w-25 m-4">
              <Form.Label>conctact</Form.Label>
                  <Form.Control type="tel" required maxLength={10} placeholder="Enter contact number" value={contact} onChange={(e)=>setContact(e.target.value)} />

                  <Form.Label>disease</Form.Label>
                  <Form.Control type="text" required placeholder="Enter disease" value={disease} onChange={(e)=>setdisease(e.target.value)} />
                  </Row>
              <Row className=" w-25 m-4">
              <Form.Label>address</Form.Label>
                  <Form.Control type="text" required placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)} />
        
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" required placeholder="Enter state" value={state} onChange={(e)=>setState(e.target.value)} />
              </Row>
        
              <Button variant="primary" id="btn321" type="submit">
                Submit
              </Button>
            </Form>
            </div>
            </div>
     );
}
 
export default AddUser;


