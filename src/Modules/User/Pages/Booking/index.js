import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setBooking } from "../../slices/PatientSlice"
import moment from "moment"
import { useEffect, useState } from "react"
import { setDoctorSlotDetails } from "../../slices/bookingSlice"
import { setBooking_slots } from "../../slices/bookingSlice"
import { setpaymentHistory } from "../../slices/HistorySlice"
export const UserBooking = () => {
    //generating day using moment
    const BookingState = useSelector((state) => state.patientdetails).bookingDetails
    const DoctorSlotDetails = useSelector((state) => state.user_doctor_slot).dotor_slot_details
    const booked_slots = useSelector((state) => state.user_doctor_slot).booking_slots
    const paymentHistoryState=useSelector((state)=>state.userhistory).paymentHistory
    console.log(booked_slots)
    const dispatch = useDispatch()


    const [mindate, setmindate] = useState("")
    const [maxdate, setmaxdate] = useState("")
    const [selectedDay, setSelectedDay] = useState('');
    // console.log(selectedDay)
    useEffect(() => {
        const today = moment()

        const tomorrow = moment(today).add(1, "days");

        setmindate(tomorrow.format('YYYY-MM-DD'))

        const max = moment(tomorrow).add(6, 'days')
        setmaxdate(max.format('YYYY-MM-DD'))

    })
    //getting url params
    const searchParams = new URLSearchParams(window.location.search)
    const param1 = searchParams.get('doctorid')
    const param2 = searchParams.get('enquiry_id')
    // getting doctor slot details
    useEffect(() => {
        axios.get(`http://agaram.academy/api/action.php?request=ai_health_get_slot_booking&doctor_id=${param1}`).then((res) => {
            dispatch(setDoctorSlotDetails(JSON.parse(res.data.data.clinic_details)))
        })
    }, [])
    let doctor = DoctorSlotDetails.filter((e) => {
        return selectedDay == e.clinic_day
    }
    )
    const [isClicked, setisClicked] = useState(true)
    const [newDoctorSlotDetails, setnewDoctorSlotDetails] = useState([])
    console.log(newDoctorSlotDetails)
    const paynow = () => {
        setnewDoctorSlotDetails(DoctorSlotDetails.filter((e) => { return e.clinic_day != selectedDay && e.clinic_timing != booked_slots.booking_time }))
        // console.log(newDoctorSlotDetails)
        const formdata = new FormData();
        formdata.append("request", "ai_health_create_doctor_appointment")
        formdata.append("booking_date", BookingState.booking_date)
        formdata.append("booking_time", BookingState.booking_time)
        formdata.append("doctor_id", param1)
        formdata.append("enquiry_id", param2)
        axios.post(`http://agaram.academy/api/action.php?request=ai_health_create_doctor_appointment`, formdata).then((res) => {
            // console.log(res) 
            dispatch(setBooking_slots(res.data.data))
            dispatch(setpaymentHistory([...paymentHistoryState,res.data.data]))
        })
    }
    return (<>
        <Header />
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
                                        <div class="form-control">{selectedDay}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input className="form-control" placeholder="date" type="date" min={mindate} max={maxdate}
                                    onChange={(e) => setSelectedDay(moment(e.target.value).format('dddd'))} onClick={(e) => dispatch(setBooking({ ...BookingState, booking_date: e.target.value }))} />
                            </div>
                        </div>
                        <div>
                            <div className="form-control border-input">Time slot</div>
                            <div className="row">
                                {doctor.map((e) =>
                                    <button className="col-5 form-control  my-4 mx-3" value={e.clinic_timing} onClick={(e) => {
                                        dispatch(setBooking({ ...BookingState, booking_time: e.target.value }))
                                    }}>{e.clinic_timing}</button>)
                                }
                                {/* 
                                <button className="col-5 form-control btn btn-success my-4 mx-3" value="5pm-7pm" onClick={(e) => dispatch(setBooking({ ...BookingState, slot: e.target.value }))}>5pm-7pm</button> */}
                            </div>
                            <div>
                                <div><button className="btn btn-danger" onClick={() => paynow()}>Pay now</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)


}