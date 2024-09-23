import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { submit_Register } from "../../slices/registerSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export const Doctor_Register = () => {

    const doctorRegisterSubmit = useSelector((state)=>state.doctor_register).doctor_register_data

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submit_Doct_Register=()=>{

        let formData = new FormData()

        formData.append("name",doctorRegisterSubmit.name)
        formData.append("email",doctorRegisterSubmit.email)
        formData.append("password",doctorRegisterSubmit.password)
        formData.append("aadhar",doctorRegisterSubmit.aadhar)
        formData.append("address",doctorRegisterSubmit.address)
        formData.append("phone",doctorRegisterSubmit.phone)
        formData.append("city",doctorRegisterSubmit.city)
        formData.append("area",doctorRegisterSubmit.area)
        formData.append("pin",doctorRegisterSubmit.pin)

        console.log(formData)

        axios.post("http://agaram.academy/api/action.php?request=create_candidate",formData) 

        navigate("/doctor_login")
        
    }

    return (
        <>
            <div className="register-page full-screen sidebar-collapse">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-translate">
                            <Link className="navbar-brand" to="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
                                AI-Health-Care
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="btn btn-round btn-danger" to="https://www.creative-tim.com/product/paper-kit-2-pro" target="_blank">
                                        Doctor Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}

                <div className="wrapper">
                    <div className="page-header" style={{ backgroundImage: "url ('+../../assets/img/sections/soroush-karimi.jpg')" }}>
                        <div className="filter"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-umbrella"></i>
                                        </div>
                                        <div className="description">
                                            <h3> We've got you covered </h3>
                                            <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. Everything you need in a single case.</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-map-signs"></i>
                                        </div>
                                        <div className="description">
                                            <h3> Clear Directions </h3>
                                            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon">
                                            <i className="fa fa-user-secret"></i>
                                        </div>
                                        <div className="description">
                                            <h3> We value your privacy </h3>
                                            <p>Completely synergize resource taxing relationships via premier niche markets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-5 col-12 mr-auto">
                                    <div className="card card-register">
                                        <h3 className="card-title text-center">Registration Form</h3>
                                        <div className="social">
                                            <button to="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                                            <button to="#paper-kit" className="btn btn-just-icon btn-google"><i className="fa fa-google"></i></button>
                                            <button to="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                                        </div>
                                        <div className="division">
                                            <div className="line l"></div>
                                            <span>or</span>
                                            <div className="line r"></div>
                                        </div>
                                        <form className="register-form">
                                            <input type="text" className="form-control" placeholder="Dr. Name" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,name:e.target.value}))}/>                                            
                                            <input type="email" className="form-control" placeholder="Email" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,email:e.target.value}))} />
                                            <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,password:e.target.value}))} />
                                            <input type="text" className="form-control" placeholder="Aadhaar No" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,aadhar:e.target.value}))}/>
                                            <input type="text" className="form-control" placeholder="Address" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,address:e.target.value}))}/>
                                            <input type="text" className="form-control" placeholder="Contact No" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,phone:e.target.value}))}/>
                                            <input type="text" className="form-control" placeholder="City" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,city:e.target.value}))} />
                                            <input type="text" className="form-control" placeholder="Area" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,area:e.target.value}))}/>
                                            <input type="number" className="form-control" placeholder="Pincode" onKeyUp={(e)=>dispatch(submit_Register({...doctorRegisterSubmit,pin:e.target.value}))}/>

                                            {/* <input type="text" className="form-control" placeholder="Hospital Name" />
                                            <input type="text" className="form-control" placeholder="Specialist" />
                                            <input type="text" className="form-control" data-color="success" value="Oncologist, Neurologist, Anesthesiologist" data-role="tagsinput" placeholder="Specialist" /> */}
                                            <button className="btn btn-block btn-round" type="button" onClick={submit_Doct_Register}>Register</button>


                                            {/* <input type="text" className="form-control" placeholder="Dr. Name" />
                                            <input type="text" className="form-control" placeholder="Doctor Id" />
                                            <input type="text" className="form-control" placeholder="Hospital Name" />
                                            <input type="text" className="form-control" placeholder="Hospital Location" />
                                            <input type="text" className="form-control" placeholder="Specialist" />
                                            <input type="text" className="form-control" data-color="success" value="Oncologist, Neurologist, Anesthesiologist" data-role="tagsinput" placeholder="Specialist" />
                                            <input type="text" className="form-control" placeholder="Email" />
                                            <input type="password" className="form-control" placeholder="City" />
                                            <input type="password" className="form-control" placeholder="Contact No" />
                                            <input type="password" className="form-control" placeholder="Create Password" />
                                            <button className="btn btn-block btn-round">Register</button> */}
                                        </form>
                                        <div className="login">
                                            <p>Already have an account? <Link to="/doctor_login">Log in</Link>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}