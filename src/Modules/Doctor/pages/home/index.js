import { Link } from "react-router-dom"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { get_slot_data } from "../../slices/slotSlice"
import { useSelector } from "react-redux"



export const Doctor_Home = () => {


    const get_slot_state = useSelector((state) => state.doctor_slot_state).doctorSlotSlice

    console.log(get_slot_state)

    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h4 className="title"><small></small></h4>
                            <div className="row">
                                {
                                    get_slot_state.map((e,i) => {
                                        return (
                                            <div className="col-md-4">
                                                <div className="card card-pricing" data-color="orange">
                                                    <div className="card-body">
                                                        <div className="card-icon">
                                                            <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                                        </div>
                                                        <h3 className="card-title">{e.clinic_day}</h3>
                                                        <p className="card-description">
                                                          {e.clinic_timing}
                                                        </p>
                                                        <h3 className="card-description">
                                                          Rs. {e.consulting_fee}
                                                        </h3>
                                                        <div className="card-footer">

                                                            { get_slot_state.length > 0? <Link to="/patient_list" className="btn btn-neutral btn-round"> {get_slot_state.length} Patient</Link> : null }
                                                            
                                                            {/* {

                                                                if(get_slot_state.length > 0){
                                                                    <Link to="#" className="btn btn-neutral btn-round"> {get_slot_state.length} Patient</Link>
                                                                }else
                                                            } */}
                                                        </div>
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
        </>
    )
}