import { Header } from "../../component/Header" 
import { Footer } from "../../component/Footer" 
import { useSelector, useDispatch } from "react-redux" 
import { useState } from "react" 
import axios from "axios" 
import { useEffect } from "react" 
import { Link, Navigate, useNavigate } from "react-router-dom" 
import { setPatient } from "../../slices/PatientSlice" 
import { setDoctorSlotDetails } from "../../slices/bookingSlice" 
import { setDoctorList, setSpecialist } from "../../slices/Doctorlistslice" 
 
export const Doctorapp = () => { 
    const patientState = useSelector((state) => state.patientdetails).patientDetails 
    const specialistState = useSelector((state) => state.DoctorList).specialist 
    console.log(specialistState) 
 
    const dispatch = useDispatch() 
    const navigate = useNavigate() 
    const doctorlist = useSelector((state) => state.DoctorList).doctorlist 
    const [searchdoctor, setSearch] = useState(doctorlist) 
    const [searchinput, setsearchinput] = useState({ city: "", specialist: "" }) 
    const display = () => { 
        if(doctorlist==""){ 
        axios.get("https://sivaharish.pythonanywhere.com/getdoctorsdata").then((res) => { 
            dispatch(setDoctorList((res.data))) 
            // console.log() 
            // dispatch(setSpecialist(res.data.data.map((e)=>JSON.parse(e.specialist)))) 
            setSearch(res.data) 
        }) 
        } 
        // else{ 
 
        // } 
 
        // console.log(res.data.data) 
 
    } 
    useEffect(() => { 
        display() 
    }, []) 
    const Filter = (event) => { 
        setSearch(doctorlist.filter((e) => (e.city.toLowerCase().includes(event.city)) && (e.name.toLowerCase().includes(event.specialist)))) 
    } 
    const booknow = (each) => { 
        // console.log(each) 
 
        // // axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_slot_booking&doctor_id=${each}`).then((res) => { 
        // //     // axios.get(`https://retheesha.pythonanywhere.com//doctor_id=${each}`).then((res) => {     
        // //     console.log(res.data.data) 
        // //     dispatch(setDoctorSlotDetails(res.data.data)) 
        // }) 
    }
    return (<> 
        {/* <div className="add-product sidebar-collapse"> */} 
            <Header /> 
            <div className="main doctorHeader"> 
                <div className="section "> 
                    <div><h3 className="text-dark text-center my-5"><b>Stay at Home. Consult Doctors Online.</b></h3></div> 
                    <div className="col-md-10 ml-auto mr-auto mt-5"> 
                        <div className="card card-raised card-form-horizontal no-transition" style={{ backgroundColor: "transparent" }}> 
                            <div className="card-body"> 
                                <form method="" action=""> 
                                    <div className="row"> 
                                        <div className="col-md-5"> 
                                            <div className="form-group"> 
                                                <input type="text" placeholder="Select City" className="form-control" onKeyUp={(e) => setsearchinput({ ...searchinput, city: e.target.value })} /> 
                                            </div> 
                                        </div> 
                                        <div className="col-md-5"> 
                                            <div className="form-group"> 
                                                <input type="text" placeholder="Search Specilist" className="form-control" onKeyUp={(e) => setsearchinput({ ...searchinput, specialist: e.target.value })} /> 
                                            </div> 
                                        </div> 
                                        <div className="col-md-2"> 
                                            <button type="button" className="btn btn-success btn-block" onClick={() => Filter(searchinput)}><i className="nc-icon nc-zoom-split"></i> &nbsp; Search</button> 
                                        </div> 
                                    </div> 
                                </form> 
                            </div> 
                        </div> 
                    </div>
                    <div className="col-md-10 ml-auto mr-auto mt-5"> 
                        <div className="row coloured-cards"> 
                            <div class="row mx-3"> 
                                {searchdoctor.map((each) => 
 
                                    <div className="col-md-6"> 
                                        <div className="card card-profile card-plain"> 
                                            <div className="row"> 
                                                <div className="col-md-5"> 
                                                    <div className="card-img-top"> 
                                                        <a href="javascript:;"> 
                                                            <img className="img" src="../../assets/img/sections/doctor-profile-with-medical-service-icon_617655-48.png"/> 
                                                        </a> 
                                                    </div> 
                                                </div> 
                                                <div className="col-md-7"> 
                                                    <div className="card-body text-left"> 
                                                        <h4 className="card-title">{each.name}</h4> 
                                                        <h6 className="card-category">{JSON.parse(each.specialist)}</h6> 
                                                        <p>{each.city}</p> 
                                                        <p className="card-description"> 
                                                            <p>{each.address}</p> 
                                                            <p className="text-danger"><i className="fa fa-inr"></i><b>200</b></p> 
                                                        </p> 
                                                        <button type="button" className="btn btn-success btn-round my-3" data-toggle="modal" data-target="#loginModal" onClick={() => { 
                                                                booknow(each.id) 
                                                                   navigate(`/user/booking?doctorid=${each.id}&enquiry_id=${patientState.id}`)  
                                                            }}> 
                                                                Book Now 
                                                            </button> 
 
                                                         
 
                                                    </div> 
                                                    
                                                </div> 
                                            </div> 
                                        </div> 
                                    </div> 
 
                                )} 
 
                            </div> 
 
                    </div> 
 
                </div> 
            </div> 
 
        </div> 
    </>) 
}