import { Link } from "react-router-dom";
import '../style/landingpage.css'

const LandingPage = () => {
    return (
        <div className="landingpage">

            <div className="img999">
                <img width={1000} id="id1" src="images/img99.jpg" alt="" />
            </div>
            <h1 id="id3">Multispeciality Hospital Bangalore.</h1>
            <div className="selectLoginType">

                <div className="users">
                    {/* <div className="logo">
                    <img id="i1" src="images/a1.jpg" alt="" />
                    <img id="i2" src="images/u1.png" alt="" />
                </div> */}
                    <br />
                    <div className="user">
                        <Link id="i3" to='/admin-login'>ADMIN-LOGIN</Link>
                        <Link id="i4" to='/user-login'>Book-Appointment</Link>
                    </div>
                    <div className="us1">
                        <p>As humans, we all wish to live a healthy and disease-free life, but this is not practical always. There are times when people need to visit doctors, take diagnostic services for their illness symptoms or get admitted to the hospital due to poor health or a sudden accident. As you look for the best hospital in boisar, you will see two options: General Hospital and Multispecialty Hospital.</p>
                      <br />
                        <p>Many people get confused between both options and choose an unsuitable one. It is highly recommended that you understand the difference between both options and choose the one that is most likely to fulfil your patient’s need for medical treatment, care and recovery. </p>
                    </div>
                    <div className="us2">
                        <h4>GENERAL HOSPITALS</h4>
                        <p>General Hospitals are hospitals that provide primary healthcare services to patients and is not specialized in any particular medical field. It is the place where people go when they need urgent emergency care or when they want to be admitted for a short period. If you are looking for a general physician in Boisar for a mild fever, a general hospital is a decent option to choose. 

</p>
                    </div>
                    <div className="us3">
                        <h4>MULTISPECIALITY HOSPITALS</h4>
                        <p>Multispeciality hospitals are hospitals that offer a wide range of medical services. These hospitals have the capability to treat many different types of illnesses and conditions. The doctors in these hospitals are specialists in their field. The state-of-the-art infrastructure and all amenities ensure that patients get everything from emergency care, diagnosis, treatment, surgery, and OPD services under one roof. These hospitals offer a wide range of services, such as general surgery, neurology, paediatrics, cardiology, orthopaedics and more.</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default LandingPage;