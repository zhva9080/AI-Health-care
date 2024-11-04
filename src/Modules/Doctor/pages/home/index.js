import { useNavigate } from "react-router-dom"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useState, useEffect } from "react"
import moment from "moment"
import { get_patient_data,setEnquiry } from "../../slices/patientBookingSlice"
import './index.css'


export const Doctor_Home = () => {

    const set_dispatch = useDispatch()
    const navigate = useNavigate()


    // get doctor id in login page
    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state).doctorLogin

    // get globe state
    const get_patients_slots_state = useSelector((state) => state.patient_booking_state).patientBooking
// <<<<<<< doctor-module-2
    // const get_patients_enquiry_details = useSelector((state) => state.patient_booking_state).patientBooking.enquiry_details



//     const [patients_booked_data, setPatients] = useState([])

//     // get diseases from api parse diseases
//     const get_disease_data = get_patients_slots_state

// =======
    // const enquiry_state=useSelector((state) => state.patient_booking_state).patientBooking.enquiry_details
    console.log(get_patients_slots_state)
    // get diseases from api parse diseases
    const [disease_data, getDiease] = useState([])
    console.log(disease_data)
// >>>>>>> submaster


    

    useEffect(() => {
        // axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_all_booked_patients&doctor_id=${doctorLoginSubmit.data.id}`).then((get_all_patients) => {
            axios.get(`https://retheesha.pythonanywhere.com/getpatientbooking/${doctorLoginSubmit.data.id}`).then((get_all_patients) => {    
            set_dispatch(get_patient_data(get_all_patients.data.data))
// <<<<<<< doctor-module-2
//             setPatients(get_all_patients.data.data.enquiry_details)
//             // getDiease(JSON.parse(get_all_patients.data.data.enquiry_details))
//             getDiease(get_all_patients.data.data.enquiry_details.diseases)
//         })
//     }, [])
//     console.log(disease_data)

// =======
            console.log(get_all_patients)
            // set_dispatch(setEnquiry(get_all_patients.data.data.enquiry_details))
            // getDiease((get_all_patients.data.data.enquiry_details.diseases))
        })
    },[])

    // console.log(get_patients_slots_state.enquiry_details)
// >>>>>>> submaster

    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main body-bg">
                    <div className="section body-bg">
                        <div className="container">
                            <div className="row">

                                {
                                    
                                    <div className="col-6 mx-auto ">
                                        {get_patients_slots_state=== null? <h2 className="text-center align-middle m-0">No Patient Booked</h2> :
                                            <div className="card card-blog border border-3 patient-card px-4">
                                                <div className="card-image">
                                                    <a href="#pablo">
                                                        <img className="img img-raised" src="../assets/img/sections/doctor/W_P.jpg" />
                                                    </a>
                                                </div>

                                                {
                                                    get_patients_slots_state.map((p_booked_details, p_booked_details_index) =>

                                                        <div className="card-body">
                                                            <div>
                                                                {/* <label className="w-50">Patient Name</label> */}
                                                                <h3 className="card-title mb-3">
                                                                    {p_booked_details.name}
                                                                </h3>
                                                            </div>
                                                            <hr className="patient-head" />
                                                            <div>
                                                                <i className="fa fa-child fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 patient-label">Patient age</label>
                                                                <h5 className="card-title">
                                                                    {p_booked_details.age}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                <i className="fa fa-intersex fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 patient-label">Gender</label>
                                                                <h5 className="card-title">
                                                                    {p_booked_details.gender}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                <i className="fa fa-tint fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 align-middle patient-label">Blood Group</label>
                                                                <h5 className="card-title">
                                                                    {p_booked_details.blood_group}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                <i className="fa fa-history fa-2x" aria-hidden="true"></i>
                                                                <label className="w-50 align-middle patient-label">Duration of Infection</label>
                                                                <h5 className="card-title ">
                                                                    {p_booked_details.duration}
                                                                </h5>
                                                            </div>
                                                            <div className="patient-card-spacing">
                                                                {/* <div className="media-footer">
                                                                    <button href="#" className="btn btn-info pull-right" type="button">Show All</button>
                                                                </div> */}
                                                                <div>
                                                                    {/* <label className="w-50">Booked Date</label> */}
                                                                    <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                                                    <label className="w-50 align-middle patient-label">Booked Date</label>
                                                                    <h5 className="card-title">
                                                                        {get_patients_slots_state.booking_date}
                                                                    </h5>
                                                                </div>
                                                                <div className="patient-card-spacing">
                                                                    <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                                                                    <label className="w-50 align-middle patient-label">Booked Time</label>
                                                                    <h5 className="card-title">
                                                                        {get_patients_slots_state.booking_time}
                                                                    </h5>
                                                                </div>
                                                                {/* <hr /> */}
                                                                {/* <div className="card-footer">
                                                                    <div className="author">
                                                                        <a href="#pablo">
                                                                            <img src="../assets/img/faces/kaci-baum-2.jpg" alt="..." className="avatar img-raised" />
                                                                            <span>Nickie Kelly</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="stats">
                                                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 5 min read
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <hr/>
                                                            <div className="patient-card-spacing card-description">
                                                                {/* <h5 className="my-3 text-danger">Current Diseases</h5> */}
                                                                <label className="w-50 patient-label-head my-3">Current Diseases</label>
                                                                <ul>
                                                                    {
                                                                        // getDiease(p_booked_details.diseases)
                                                                        // getDiease(JSON.parse(p_booked_details.diseases))

                                                                    }
                                                                </ul>
                                                            </div>
                                                            <p className="card-description">
                                                                <label className="w-50 patient-label-head my-3">Existing  Diseases</label>
                                                                {p_booked_details.existing_diseases}
                                                            </p>
                                                        </div>)
                                                }

                                            </div>
                                        }
                                    </div>


                                


                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}