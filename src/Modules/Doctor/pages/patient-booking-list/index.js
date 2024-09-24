// import "../App.css"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"




export const PatientsList = () => {


    // const {id} = useParams()
    const get_patients_booking = useSelector((state)=>state.doctor_slot_state).doctorSlotSlice

    const [uniqueDay_all_patients, get_patients_data] = useState([])

    useEffect(() => {
            axios.get(`http://agaram.academy/api/action.php?request=getAllMembers`).then((day_all_patient_data) => {
                get_patients_data(day_all_patient_data.data.data)
        })
    },[]
    )


    return (
        <>
            <Header />
            <div class="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h3 className="text-center title">Booking Patient</h3>
                            <div className="col-md-10 ml-auto mr-auto">
                                <div className="table-responsive">
                                    <table className="table table-shopping">
                                        <thead>
                                            <tr>
                                                
                                                <th className="text-center">Name</th>
                                                <th className="text-center">Time</th>
                                                <th className="text-center">Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                // uniqueDay_all_patients.filter((globValue,globIndex)=>{
                                                //     return console.log(globValue)
                                                // }
                                                // )
                                                
                                                uniqueDay_all_patients.map((value,index)=>{
                                                    
                                                    return (
                                                        <tr>
                                                            <td className="td-product text-center">
                                                                <h6>{value.name}</h6>
                                                            </td>
                                                            <td className="td-price text-center">
                                                                <h6>{value.phone}</h6>
                                                            </td>
                                                            <td className="td-price text-center">
                                                                <h6>{value.city}</h6>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                )
                                            }
                                            
                                            {/* <tr>
                                                <td className="td-product text-center">
                                                    <h6>{id.clinic_timing}</h6>
                                                </td>
                                                <td className="td-price text-center">
                                                    <h6>{id.consulting_fee}</h6>
                                                </td>
                                                <td className="td-price text-center">
                                                    <h6>Fever</h6>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}