import { useNavigate } from "react-router-dom"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import moment from "moment"
import { deleteSlot } from "../../slices/removeSlotSlice"



export const Doctor_Home = () => {

    // axios.get("http://agaram.academy/api/action.php?request=ai_health_get_all_booked_patients").then((get_all_patients)=>{
    // // axios.get(`https://retheesha.pythonanywhere.com/getuniquedoctorslot/2`).then((get_all_patients)=>{  
    //     console.log(get_all_patients)
    // })

    const get_slot_state = useSelector((state) => state.doctor_slot_state).doctorSlotSlice
    const navigate = useNavigate()

    const [uniqueDay_all_patients, get_patients_data] = useState([])

    useEffect(() => {
        // axios.get(`http://agaram.academy/api/action.php?request=getAllMembers`).then((day_all_patient_data) => {
            axios.get(`https://retheesha.pythonanywhere.com/getpatientbooking/5`).then((day_all_patient_data) => {   
            get_patients_data(day_all_patient_data.data.data)
        })
    }, []
    )

    const date = moment().format('MMMM Do YYYY dddd');
    useEffect(() => { }, [date]
    )

    // console.log(date)

    var now = new Date();
    var daysOfYear = [];
    for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
        daysOfYear.push(new Date(d));
    }

    // console.log(daysOfYear)



    const secure = () => {
        let isLogged = localStorage.getItem("isLogged");
        // !isLogged? navigate("/doctor/login") : null
        if (!isLogged) {
            window.location = "/doctor/login"
        }
    }


    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                        <div className="media-footer">
                                <button href="#" className="btn btn-info pull-right" type="button">Show All</button>
                            </div>
                            <h4 className="title">
                                {/* <small><input type="date" id="date"></input>
                                </small> */}

                            </h4>
                            
                            <div className="row">
                                {

                                    get_slot_state.map((e, i) => {
                                        return (
                                            <div className="col-md-4 mx-auto">
                                                <div className="card card-pricing" data-color="orange">
                                                    <div className="card-body">
                                                        <div className="card-icon">
                                                            <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                                        </div>
                                                        <h3 className="card-title">{e.clinic_day}</h3>
                                                        <p className="card-description">
                                                            {e.clinic_timing}
                                                        </p>
                                                        <div className="card-footer mb-4">
                                                            {get_slot_state.length > 0 ? <button className="btn btn-neutral btn-round" onClick={() => navigate(`/patient_list/${i}`)}> 
                                                                {uniqueDay_all_patients.length} 
                                                                Booked</button> : <button className="btn btn-warning btn-round">Booked Patient</button>}
                                                        </div>
                                                        <button type="button" className="btn btn-danger btn-just-icon" onClick={deleteSlot()}><i className="nc-icon nc-simple-remove" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }

                                {/* <div className="col-md-3">
                                    <div className="card card-pricing" data-color="orange">
                                        <div className="card-body">
                                            <div className="card-icon">
                                                <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                            </div>
                                            <h3 className="card-title">12/08/2024</h3>
                                            <p className="card-description">
                                                3pm-4pmm
                                            </p>
                                            <div className="card-footer">
                                                <Link to="#" className="btn btn-neutral btn-round">No booking</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {secure}
        </>
    )
}