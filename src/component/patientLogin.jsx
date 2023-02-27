import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Form  from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

        function PatientLogin() {
   
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
              let patient={name,address,disease,age,email,contact,state}
               fetch(' http://localhost:2000/patient',{
                  method:"POST",
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify(patient)
              })
              alert(`${name} your appointment is Booked`)
              navigate('/')
            }
          return (
            <div className="addDoctor   m-4  ">
                <h1>Book Appointment</h1>
            <Form onSubmit={submit}>
              
              <Row className="mb-3 ">
        
              <Form.Label>name</Form.Label>
                  <Form.Control type="text" required  placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
    
        
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="date" required placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} />

                  <Form.Label>appointment</Form.Label>
                  <Form.Control type="date" required placeholder="Enter appointment" value={appointment} onChange={(e)=>setappointment(e.target.value)} />
                
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              
              </Row>
                 
              <Form.Label>conctact</Form.Label>
                  <Form.Control type="tel" required maxLength={10} placeholder="Enter contact number" value={contact} onChange={(e)=>setContact(e.target.value)} />

                  <Form.Label>disease</Form.Label>
                  <Form.Control type="text" required placeholder="Enter disease" value={disease} onChange={(e)=>setdisease(e.target.value)} />
          
              <Row className="mb-3">
              <Form.Label>address</Form.Label>
                  <Form.Control type="text" required placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)} />
        
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" required placeholder="Enter state" value={state} onChange={(e)=>setState(e.target.value)} />
              </Row>
        
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
     );
}
 
export default PatientLogin;