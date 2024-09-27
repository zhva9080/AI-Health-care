import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import { useSelector,useDispatch } from "react-redux"
import { setBooking } from "../../slices/PatientSlice"
export const UserBooking = () => {
    const BookingState=useSelector((state)=>state.patientdetails).bookingDetails
    const dispatch=useDispatch()
    const paynow=()=>{
        console.log(BookingState)
    }
    return (<>
        <Header/>
        <div className="container mt-5">
            <div className="container tim-container mt-5">
                <div className="row ">
                    <div className="col-md-4 col-sm-6">
                    </div>
                </div>
                <div className="card w-50 mt-5 mx-auto" data-color="purple" data-background="color">
                    <div className="card-body text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                <div class="form-group">
                                    <div  class="form-control">Select Day</div>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                            
                            <select className="form-select form-control" data-style="btn-info btn-round" aria-label="Default select example" onClick={(e)=>dispatch(setBooking({...BookingState,day:e.target.value}))}>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="wednesday">wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select>   
                            </div>
                        </div>
                       <div>
                            <div className="form-control border-input">Time slot</div>
                            <div className="row">
                                <button className="col-5 form-control btn btn-success my-4 mx-3" value="10am-12pm" onClick={(e)=>dispatch(setBooking({...BookingState,slot:e.target.value}))}>10am-12pm</button>
                                <button className="col-5 form-control btn btn-success my-4 mx-3" value="5pm-7pm" onClick={(e)=>dispatch(setBooking({...BookingState,slot:e.target.value}))}>5pm-7pm</button>
                            </div>
                            <div>
                                <div><button className="btn btn-danger" onClick={paynow}>Pay now</button></div>
                            </div>
                       </div>
                    </div>
                </div>




            </div>
        </div>









    </>)


}