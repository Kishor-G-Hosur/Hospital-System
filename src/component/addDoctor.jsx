
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import '../style/addDoctor.css'

function AddDoctor() {
   
    let [name,setName]=useState()
    let [Specialist,setSpecialist]=useState()
    let [age,setAge]=useState()
    let [email,setEmail]=useState()
    let [conctact,setConctact]=useState()
    let [state,setState]=useState()

  let navigate=useNavigate()
  

    let submit=(e)=>
    {
      e.preventDefault();
      let doctor={name,Specialist,age,email,conctact,state}
       fetch('http://localhost:2000/Doctor',{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(doctor)
      })
      navigate('/admin/show-doctors')
    }
  return (
    <div className="addDoctor12">
    <div className="addDoctor21 w-25 m-4 ">
    <Form onSubmit={submit}>
      <Row className="mb-3">

      <Form.Label>name</Form.Label>
          <Form.Control type="text" required placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />

          <Form.Label>Specialist</Form.Label>
          <Form.Control type="text" required placeholder="Enter Specialist" value={Specialist} onChange={(e)=>setSpecialist(e.target.value)} />

          <Form.Label>Age</Form.Label>
          <Form.Control type="date" required  placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} />
        
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"required placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      
      </Row>
         
      <Form.Label>conctact</Form.Label>
          <Form.Control type="tel" maxLength={10} required placeholder="Enter contact number" value={conctact} onChange={(e)=>setConctact(e.target.value)} />
  
      <Row className="mb-3">

          <Form.Label>State</Form.Label>
          <Form.Control type="text" required  placeholder="Enter state" value={state} onChange={(e)=>setState(e.target.value)} />
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <div className="img32">
      <img src="images/d1.webp" alt="" />
    </div>
    </div>
  );
    
}

export default AddDoctor;