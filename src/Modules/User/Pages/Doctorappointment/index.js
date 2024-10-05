import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { setPatient } from "../../slices/PatientSlice"
import { setDoctorSlotDetails } from "../../slices/bookingSlice"
import { setDoctorList } from "../../slices/Doctorlistslice"
export const Doctorapp = () => {
    const patientState = useSelector((state) => state.patientdetails).patientDetails
    
    console.log(patientState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const doctorlist=useSelector((state)=>state.DoctorList).doctorlist
    const [searchdoctor, setSearch] = useState(doctorlist)
    const [searchinput, setsearchinput] = useState({ city: "", specialist: "" })
    const display = () => {
        if(doctorlist==""){
            axios.get("http://agaram.academy/api/action.php?request=ai_health_getalldoctorsdetails").then((res) => {
                dispatch(setDoctorList((res.data.data)))
                setSearch(res.data.data)
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
        setSearch(doctorlist.filter((e) => {
            if ((e.city.toLowerCase().includes(event.city)) && (e.name.toLowerCase().includes(event.specialist))) {
                return e
            }
        }))
    }
    const booknow = (each) => {
        // console.log(each)

        // axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_slot_booking&doctor_id=${each}`).then((res) => {
        //     console.log(res.data.data)
        //     dispatch(setDoctorSlotDetails(res.data.data))
        // })
    }

    return (<>
        <div className="add-product sidebar-collapse">
            <Header />
            <div className="main">
                <div className="section ">
                    <div className="col-md-10 ml-auto mr-auto mt-5">
                        <div className="card card-raised card-form-horizontal no-transition" style={{ backgroundColor: "#92eded" }}>
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
                                            <button type="button" className="btn btn-danger btn-block" onClick={() => Filter(searchinput)}><i className="nc-icon nc-zoom-split"></i> &nbsp; Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 ml-auto mr-auto mt-5">
                        <div className="row coloured-cards">

                            {searchdoctor.map((each) =>
                                <div className="col-md-6 col-sm-6">
                                    <div>
                                        <div className="card" data-background="color" data-color="green" data-radius="none">
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="row">

                                                            <div className="col-8">
                                                                <span>
                                                                    <h4 className="card-title"><a href="#">{ }</a></h4>
                                                                </span>
                                                                <h6 className="card-category">{each.name}</h6>
                                                                <p className="card-description">{each.address}</p>
                                                                <p className="card-description my-0">{each.city}</p>
                                                            </div>
                                                            <div className="row">

                                                                <ul >

                                                                    <li><h6 className="card-category">{JSON.parse(each.specialist)}</h6></li>

                                                                </ul>


                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-4">
                                                        <div className="media-footer">
                                                            <a href="tel:+917896586325" className="btn btn-warning btn-wd">{each.phone}</a>
                                                        </div>
                                                        <div className="my-3">
                                                            <label for=""></label>
                                                            <button type="button" className="btn btn-info btn-wd">100</button>
                                                        </div>

                                                        <div className="my-3">
                                                            <button type="button" className="btn btn-danger btn-round" data-toggle="modal" data-target="#loginModal" onClick={() => {
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
                                    </div>
                                    {/* <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" style={{ display: "none" }} aria-hidden="true">
                                        <div className="modal-dialog modal-register">
                                            <div className="modal-content">"none"
                                                <div className="modal-header no-border-header text-center">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group">
                                                        <label>Select Day</label>
                                                        <input type="text" placeholder="Email" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Time slot</label>
                                                                                                            </div>
                                                    <button className="btn btn-block btn-round">Pay now</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}

                                </div>

                            )}

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </>)
}