import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useSelector,useDispatch } from "react-redux"
import { setpatientHisory } from "../../slices/HistorySlice"
import { useNavigate } from "react-router-dom"
export const Userhistory = () => {
    const patientState=useSelector((state)=>state.patientdetails).patientDetails
    const HistoryState=useSelector((state)=>state.userhistory).patienthistory
    const navigate=useNavigate()          
    const dispatch=useDispatch()
    console.log(HistoryState)             
    const deleteHistory=(index)=>{
        console.log(index)
       let DeleteHistory=HistoryState.filter((each,historyindex)=>{
            if(index!=historyindex){
                return(each)
            }
        }
        )
        console.log(DeleteHistory)
        dispatch(setpatientHisory(DeleteHistory))
    }
    
    return (<>
        <div className="add-product sidebar-collapse">
        <Header/>
            <div className="main">
                <div className="section ">
                    <div className="container">
                        <h3 className="text-center title">Patient History</h3>
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="table-responsive">
                                <table className="table table-shopping">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Disease</th>
                                            <th className="text-center">Date</th>
                                            <th className="text-center">View</th>
                                            <th className="text-center">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {HistoryState.map((e,i)=>
                                            <tr>
                                            <td className="text-center">
                                                <h6>{e.patient_name}</h6>
                                            </td>
                                            <td className="td-product text-center">
                                            <h6>{e.diseases}</h6>
                                            </td>
                                            <td className="td-price text-center">
                                                <h6>20-09-2024</h6>
                                            </td>
                                            <td className="td-number td-quantity text-center">
                                                <button type="button" className="btn btn-outline-info btn-round"onClick={()=>navigate(`/user/viewdetails/${i}`)}>View</button>
                                            </td>
                                            <td className="td-number text-center">
                                                <button type="button" className="btn btn-outline-danger btn-round" onClick={()=>deleteHistory(i)}>Delete</button>
                                            </td>
                                        </tr>
                                        
                                        )}
                                        
                                   </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    </>)
}