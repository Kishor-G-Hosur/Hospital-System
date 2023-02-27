import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/showuser.css'
const ShowUser = () => {
    let [patient,setPatient]=useState([])
    

    useEffect(()=>{
     let fetchdata=async()=>{
            let response=await fetch('http://localhost:2000/patient',{})
            let data=await response.json()
            setPatient(data)
        }
        fetchdata()
    },[patient])
     
    let navigator=useNavigate()
    let remove=(id,name)=>
    {
        navigator=fetch(`http://localhost:2000/patient/${id}`,
        {
            method:"DELETE"
        })
    }
    return ( 
        <div className="showdoctor">
               <div className="userlist1"> 
            <h1 id="pl1">patient list</h1>
            {
                patient.map((data)=>
                (

                    <div className="showdoctor1">
                     
                        <h4>name: {data.name}</h4>
                        <h4>age: {data.age}</h4>
                        <h4>address:{data.address}</h4>
                        <h4>disease:{data.disease}</h4>
                        <h4>date:{data.appointment}</h4>
                        <h4>email: {data.email}</h4>
                        <h4>phoneNumber: {data.contact}</h4>
                        <h4>state:{data.State}</h4>
                        <button id="btn99" onClick={()=>remove(data.id)}>Delete</button>
                    </div>

                ))
            }
        </div>
        </div>
     );
}
 
export default ShowUser;