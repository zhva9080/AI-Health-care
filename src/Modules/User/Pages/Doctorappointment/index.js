import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
export const Doctorapp = () => {
    // const patientState=useSelector((state)=>state.patientdetails).patientDetails
    // console.log(patientState)
    const [doctorlist, setDoctorlist] = useState([])
    const [searchdoctor, setSearch] = useState(doctorlist)
    const [searchinput, setsearchinput] = useState({ city: "", specialist: "" })
    const display = () => {
        axios.get("http://agaram.academy/api/action.php?request=getAllMembers").then((res) => {
            setDoctorlist(res.data.data)
            setSearch(res.data.data)
        })
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
                                                                    <h4 className="card-title"><a href="#">St.Johns Hospital</a></h4>
                                                                </span>
                                                                <h6 className="card-category">{each.name}</h6>
                                                                <p className="card-description">{each.address}</p>
                                                                <p className="card-description my-0">{each.city}</p>
                                                            </div>
                                                            <div className="row">
                                                                <ul >
                                                                    <li><h6 className="card-category">Ortho</h6></li>
                                                                    <li><h6 className="card-category">Neouro</h6></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-4">
                                                        <div className="media-footer">
                                                            <a href="tel:+917896586325" className="btn btn-warning btn-wd">Call Now</a>
                                                        </div>
                                                        <div className="my-3">
                                                            <label for=""></label>
                                                            <button type="button" className="btn btn-info btn-wd">100</button>
                                                        </div>
                                                        <div className="my-3">
                                                            <button type="button" className="btn btn-danger btn-round" data-toggle="modal" data-target="#loginModal" onCl>
                                                                Book Now
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="modal fade" id="loginModal" tabindex="-1" role="dialog"  aria-hidden="false">
                                        <div className="modal-dialog modal-register">
                                            <div className="modal-content">
                                                <div className="modal-header no-border-header text-center">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h6 className="text-muted">Welcome</h6>
                                                    <h3 className="modal-title text-center">Paper Kit</h3>
                                                    <p>Log in to your account</p>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" value="" placeholder="Email" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input type="password" value="" placeholder="Password" className="form-control" />
                                                    </div>
                                                    <button className="btn btn-block btn-round"> Log in</button>
                                                </div>
                                                <div className="modal-footer no-border-footer">
                                                    <span className="text-muted  text-center">Looking <a href="javascript:;">create an account</a> ?</span>
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