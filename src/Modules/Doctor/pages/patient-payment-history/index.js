import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import moment from "moment"
import { useNavigate } from 'react-router-dom';
import { get_patient_data, setEnquiry } from "../../slices/patientBookingSlice"

export const Patient_History = () => {

    const set_dispatch = useDispatch();
    const navigate = useNavigate();
    const doctortoken=localStorage.getItem("doctor_token")


    // Get global state for patient slots and doctor login 
    const get_patients_slots_state = useSelector((state) => state.patient_booking_state?.patientBooking);
    const doctorLoginSubmit = useSelector((state) => state.doctor_login_state?.doctorLogin);

    // Local state for storing disease data 
    const [disease_data, setDisease] = useState([]);

    // Log for debugging purposes 
    console.log(get_patients_slots_state);
    console.log(disease_data);

    const doctor_id=localStorage.getItem("doctor_id") 
    const doctorId = doctorLoginSubmit?.data?.id || doctor_id;

    // Fetch patient data based on the doctor's login ID 
    useEffect(() => {
        const headers={'Authorization':`Bearer ${doctortoken}`}

        if (doctorLoginSubmit?.data?.id) {
            const fetchPatientData = async () => {
                try {
                    const response = await axios.get(`https://sivaharish.pythonanywhere.com/getpatientbooking/${doctorId}`,{headers});
                    set_dispatch(get_patient_data(response.data.data));
                } catch (error) {
                    console.error('Error fetching patient data:', error);
                }
            };

            fetchPatientData();
        }
    }, [doctorLoginSubmit, set_dispatch]);

    // Filter finished slots (slots that have already occurred) 
    const now = moment(); // Current date and time 

    const finishedSlots = get_patients_slots_state?.filter(slot => {
        const slotDateTime = moment(`${slot.booking_date} ${slot.booking_time}`, 'YYYY-MM-DD HH:mm');
        return slotDateTime.isBefore(now); // Check if the slot time has already passed 
    });
    console.log(finishedSlots)

    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h4 className="title"><small></small></h4>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center">S.No</th>
                                            <th> Booked Date</th>
                                            <th>Booked Timing</th>
                                            <th>Patient Name</th>
                                            <th className="text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {finishedSlots.map((e,i) =>
                                            <tr>
                                                <td className="text-center">{i+1}</td>
                                                <td>{e.booking_date}
                                                    {/* <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" value="" />
                                                            <span className="form-check-sign"></span>
                                                        </label>
                                                    </div> */}
                                                </td>
                                                <td>{e.booking_time}</td>
                                                <td>{e.enquiry_details.name}</td>
                                                <td className="text-right">&euro; 1,225</td>
                                            </tr>
                                        )}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}