import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/showDoctor.css'

const ShowDoctor = () => {
    let [doctor,setDoctor]=useState([])
    

    useEffect(()=>{
     let fetchdata=async()=>{
            
            let response=await fetch('http://localhost:2000/Doctor',{})
            let data=await response.json()
            setDoctor(data)
        }
        fetchdata()
    },[])
     
    let navigator=useNavigate()
    let remove=(id,name)=>
    {
        navigator=fetch(`http://localhost:2000/Doctor/${id}`,
        {
            method:"DELETE"
        })
    }
    return ( 
        <div className="showdoctor">
               <div className="userlist1"> 
            <h1 id="sd1">Doctor list</h1>
            {
                doctor.map((data)=>
                (

                  
                        <div className="doctor">
                     
                        <h4>name: {data.name}</h4>
                        <h4>age: {data.age}</h4>
                        <h4>Specialist:{data.Specialist}</h4>
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
 
export default ShowDoctor;