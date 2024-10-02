import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setpatientHisory } from "../../slices/HistorySlice"
import { useEffect } from "react"
import axios from "axios"
export const Viewdetails = () => {
    const HistoryState=useSelector((state)=>state.userhistory).patienthistory
    const patientState=useSelector((state)=>state.patientdetails).patientDetails
    const dispatch=useDispatch()
    let{id}=useParams()
    // console.log(index)
    useEffect(()=>{
        axios.get(`http://agaram.academy/api/action.php?request=ai_health_getDetailsForEnquiry&id=${id}`).then((res) => {
          console.log(res)
        //   dispatch(setPatient(res.data))
        })
    })
   
    return (<>
        <div className="add-product sidebar-collapse">
            <Header />
            <div className="main">
                <div className="section ">
                    <div className="section section-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 mx-auto">
                                    <div className="card card-blog" style={{backgroundColor: "#6489b117"}}>
                                        <div className="card-body w-75 mx-auto">
                                            <label className="badge badge-pill badge-warning p-3">Self Treatment</label>
                                            <div className="row">
                                                {/* <div className="col-6">
                                                    <h3 className="text-info" style={{fontWeight: "600"}}>{.patient_name?HistoryState[index].patient_name:"name"}</h3>
                                                    <h4 className=" text-info" style={{fontWeight: "500"}}>{HistoryState[index].blood_group?HistoryState[index].blood_group:"0-positive"}</h4>
                                                    <h4 className=" text-info" style={{fontWeight: "500"}}>{HistoryState[index].duration?HistoryState[index].duration:"2 days"}</h4>
                                                </div>
                                                <div className="col-6">
                                                    <h4 className=" text-info" style={{fontWeight: "500"}}>19-09-2024</h4>
                                                    <h4 className="text-info" style={{fontWeight: "500"}}>{HistoryState[index].gender?HistoryState[index].gender:""}</h4>
                                                    <h4 className=" text-info" style={{fontWight: "500"}}>{HistoryState[index].age?HistoryState[index].age:""}</h4>
                                                </div> */}
                                            </div>

                                            <div className="row mt-5">
                                                <div className="col-md-9 mx-auto col-sm-6">
                                                    <div className="card card-blog">
                                                        <div className="card-image">
                                                            <a href="javascript:;">
                                                                                                                            </a>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <h4 className="card-title">Take Food</h4>
                                                            <div className="card-description">
                                                                Cards are an interaction model that are spreading pretty widely, in fact. What all of these have in common is that they're pulling...
                                                            </div>
                                                            <div className="card-footer">
                                                                <a href="javascript:;" className="btn btn-danger btn-round">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-md-6 mx-auto col-sm-6">
                                                    <div className="card card-blog">
                                                        <div className="card-image">
                                                            <a href="javascript:;">
                                                                
                                                            </a>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <h4 className="card-title">Siddha Medicine</h4>
                                                            <div className="card-description">
                                                                Cards are an interaction model that are spreading pretty widely, in fact. What all of these have in common is that they're pulling...
                                                            </div>
                                                            <div className="card-footer">
                                                                <a href="javascript:;" className="btn btn-danger btn-round">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mx-auto col-sm-6">
                                                    <div className="card card-blog">
                                                        <div className="card-image">
                                                            <a href="javascript:;">
                                                                
                                                            </a>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <h4 className="card-title">Allopathic Medicine</h4>
                                                            <div className="card-description">
                                                                Cards are an interaction model that are spreading pretty widely, in fact. What all of these have in common is that they're pulling...
                                                            </div>
                                                            <div className="card-footer">
                                                                <a href="javascript:;" className="btn btn-danger btn-round">Read More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <hr> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                    
                </div>
            </div>
            

            <Footer/>
        </div>
    </>)
}