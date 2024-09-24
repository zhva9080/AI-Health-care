import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import { useSelector,useDispatch } from "react-redux"
import { setPatient } from "../../slices/PatientSlice"
import { useNavigate,Link} from "react-router-dom"
export const Userhome = () => {
    const navigate=useNavigate()
    const patientState=useSelector((state)=>state.patientdetails).patientDetails
    // console.log(patientState)
    const dispatch=useDispatch()
    const selftreatment=()=>{
        navigate("/user/view")
    }
    return (<>
        <div className="add-product sidebar-collapse">
            <Header/>
            <div className="main">
                <div className="section ">
                    <div className="container">
                        <h3 className="text-center title mb-0">Patient Enquiry Form</h3>
                        <div>
                            <div className="row">
                                <div className="col-md-7 col-sm-7">
                                    <div className="form-group">
                                        <h6>Patient Name <span className="icon-danger">*</span></h6>
                                        <input type="text" className="form-control border-input" placeholder="Enter the name" onKeyUp={(e)=>dispatch(setPatient({...patientState,patient_name:e.target.value}))}/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 form-group my-5 ml-0 pl-0">
                                        <div className="card-big-shadow" style={{maxWidth:"100%"}} >
                                            <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                                <div className="card-body">
                                                    <h4 className="card-title">Enquiy For</h4>

                                                    <div className="row">
                                                        <div className="form-group my-5 col-6">
                                                            {/* <select name="huge" className="selectpicker" data-style="btn-danger btn-round" multiple data-live-search="true" onClick={(e)=>dispatch(setPatient({...patientState,diseases:e.target.value}))}>
                                                                <option disabled selected>Select Disease</option>
                                                                <option value="Common Cold">Common Cold</option>
                                                                <option value="Influenza (Flu)">Influenza (Flu)</option>
                                                                <option value="Diabetes Mellitus">Diabetes Mellitus</option>
                                                                <option value="Hypertension">Hypertension (High Blood Pressure)</option>
                                                                <option value="Asthma">Asthma</option>
                                                                <option value="Heart Disease">Heart Disease</option>
                                                                <option value="Arthritis">Arthritis</option>
                                                                <option value="GERD">Gastroesophageal Reflux Disease (GERD)</option>
                                                                <option value="COPD">Chronic Obstructive Pulmonary Disease (COPD)</option>

                                                            </select> */}
                                                            <select className="form-select" data-style="btn-info btn-round" aria-label="Default select example"  onClick={(e)=>dispatch(setPatient({...patientState,duration:e.target.value}))}>
                                                                <option disabled selected>Select Disease</option>
                                                                <option value="Common Cold">Common Cold</option>
                                                                <option value="Influenza (Flu)">Influenza (Flu)</option>
                                                                <option value="Diabetes Mellitus">Diabetes Mellitus</option>
                                                                <option value="Hypertension">Hypertension (High Blood Pressure)</option>
                                                                <option value="Asthma">Asthma</option>
                                                                <option value="Heart Disease">Heart Disease</option>
                                                                <option value="Arthritis">Arthritis</option>
                                                                <option value="GERD">Gastroesophageal Reflux Disease (GERD)</option>
                                                                <option value="COPD">Chronic Obstructive Pulmonary Disease (COPD)</option>
                                                            </select>   
                                                        </div>
                                                        <div className="form-group my-5 col-6">
                                                            {/* <select name="huge" className="selectpicker" data-style="btn-info btn-round" data-menu-style="dropdown-info" onClick={(e)=>dispatch(setPatient({...patientState,duration:e.target.value}))}>
                                                                <option disabled selected>Select Duration</option>
                                                                <option value="1">0-3</option>
                                                                <option value="1">4-5</option>
                                                                <option value="1">6-10</option>
                                                                <option value="1">11-15</option>
                                                                <option value="1">16-20</option>
                                                            </select> */}
                                                            <select className="form-select" data-style="btn-info btn-round" aria-label="Default select example" onClick={(e)=>dispatch(setPatient({...patientState,duration:e.target.value}))}>
                                                                <option disabled selected>Duration of illness</option>
                                                                <option value="0-3">0-3</option>
                                                                <option value="4-5">4-5</option>
                                                                <option value="6-10">6-10</option>
                                                            </select>   
                                                        </div>
                                                    </div>


                                                    <div className="form-group">
                                                        <h4 className="card-category bg-info ">Existing Disease </h4>
                                                        <textarea className="form-control textarea-limited" placeholder="This is a textarea limited to 150 characters." rows="13" maxlength="150" onKeyUp={(e)=>dispatch(setPatient({...patientState,existing_diseases:e.target.value}))}></textarea>
                                                        <h5><small><span id="textarea-limited-message" className="pull-right">150 characters left</span></small></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-5">
                                    <div className="row">
                                        <div className="col-sm-6 mt-5">
                                            <div className="form-group">
                                                <div className="input-group date" id="datetimepicker">
                                                    <input type="date" className="form-control datetimepicker" placeholder="12/06/2024" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">
                                                            <span className="glyphicon glyphicon-calendar"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <h6>Gender<span className="icon-danger">*</span></h6>
                                    <div className="form-check-radio">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" onClick={(e)=>dispatch(setPatient({...patientState,gender:e.target.value}))}/>
                                            Male
                                            <span className="form-check-sign"></span>
                                        </label>
                                    </div>
                                    <div className="form-check-radio">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" checked onClick={(e)=>dispatch(setPatient({...patientState,gender:e.target.value}))}/>
                                            Female
                                            <span className="form-check-sign"></span>
                                        </label>
                                    </div>

                                    <div className="form-group my-5">
                                        {/* <select name="huge" className="selectpicker" data-style="btn-danger btn-round" data-menu-style="dropdown-info" onClick={(e)=>dispatch(setPatient({...patientState,blood_group:e.target.value}))}>
                                            <option disabled selected> Blood Group </option>
                                            <option value="1">A Positive</option>
                                            <option value="1">A Negative</option>
                                            <option value="1">B Positive</option>
                                            <option value="1">B Negative</option>
                                            <option value="1">O Positive</option>
                                        </select> */}
                                         <select className="form-select btn-danger p-2" data-style="btn-info btn-round" aria-label="Default select example" onClick={(e)=>dispatch(setPatient({...patientState,duration:e.target.value}))}>
                                            <option disabled selected> Blood Group </option>
                                            <option value="1">A Positive</option>
                                            <option value="1">A Negative</option>
                                            <option value="1">B Positive</option>
                                            <option value="1">B Negative</option>
                                            <option value="1">O Positive</option>
                                        </select>   
                                    </div>
                                    <div className="form-group my-5">
                                        {/* <select name="huge" className="selectpicker" data-style="btn-info btn-round" data-menu-style="dropdown-info" onClick={(e)=>dispatch(setPatient({...patientState,age:e.target.value}))}>
                                            <option disabled selected> Choose Age</option>
                                            <option value="1">0-3</option>
                                            <option value="1">4-5</option>
                                            <option value="1">6-10</option>
                                            <option value="1">11-15</option>
                                            <option value="1">16-20</option>
                                        </select> */}
                                         <select  className="form-select btn-success p-2" data-style="btn-info btn-round" aria-label="Default select example" onClick={(e)=>dispatch(setPatient({...patientState,duration:e.target.value}))}>
                                            <option disabled selected> Choose Age</option>
                                            <option value="1">0-3</option>
                                            <option value="1">4-5</option>
                                            <option value="1">6-10</option>
                                            <option value="1">11-15</option>
                                            <option value="1">16-20</option>
                                        </select>  

                                    </div>

                                </div>

                            </div>
                            <div className="row buttons-row">
                                <div className="col-md-6 col-sm-4">
                                    <button className="btn btn-outline-danger btn-block btn-round" type="reset" onClick={selftreatment}>Self Treatment</button>
                                </div>
                                <div className="col-md-6 col-sm-4">
                                    <Link to="/user/doctorapp"><button className="btn btn-outline-primary btn-block btn-round" type="submit">Doctor Appointment</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>

    </>)
}