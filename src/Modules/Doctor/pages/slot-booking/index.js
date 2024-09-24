import { useState, useEffect} from "react"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { get_slot_data } from "../../slices/slotSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const DoctorSlot = () => {

    // let slotList = []

    const [getList, addList] = useState(
        {
            clinic_day: "",
            clinic_timing: "",
            consulting_fee: null
        }
    )

    const [slotList, setSlotList] = useState([])

    // useEffect (()=>{ slotList},[])


    const addSlotList = () => {
        setSlotList([...slotList, getList])
    }


    const slotDelete=(index)=>{
      
       const data= slotList.filter((slotListvalues,slotListindex)=>{
            if(index!=slotListindex){
                return slotListvalues
            }
        })
        setSlotList(data)

    }
    
    const get_slot_state = useSelector((state)=>state.doctor_slot_state).doctorSlotSlice
    const set_dispatch = useDispatch()
    const navigate = useNavigate()


    // navigate('/doctor_home')
    // console.log(get_slot_state)

    
    return (
        <>
            <Header />
            <div class="add-product sidebar-collapse">
                <div className="row">
                    <div className="col-md-6 col-sm-6 mx-auto ">
                        <h2>Add Visiting Time Slot</h2>
                        <hr />
                        {/* <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <h4> Day</h4>
                                <hr />
                                <div className="form-group">
                                    <select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block "
                                        data-menu-style="">
                                        <option disabled selected> Select Day</option>
                                        <option value="1"><input /> Sunday </option>
                                        <option value="2">Monday </option>
                                        <option value="3">Tuesday</option>
                                        <option value="4">Wednesday</option>
                                        <option value="5">Thursday </option>
                                        <option value="6">Friday</option>
                                        <option value="7">Saturday</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">

                            <div className="col-md-4 col-sm-4">
                                <h4>Select  Day</h4>
                                <hr />
                                <select name="huge" className="form-select" data-style="btn btn-outline-default btn-block" data-menu-style="" onClick={(e) => addList({...getList,clinic_day: e.target.value})} >
                                        <option disabled selected>Select Day</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                </select>
                                
                                {/* <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: Sunday)" onKeyUp={(e) => addList({ ...getList, clinic_day: e.target.value })} /> */}
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h4>Timing</h4>
                                <hr />
                                <select name="huge" className="form-select" data-style="btn btn-outline-default btn-block" onClick={(e)=>addList({...getList, clinic_timing: e.target.value})}>
                                    <option value="select time">Select Time</option>
                                    <option value="9am to 10am">9am to 10am</option>
                                    <option value="10am to 12pm">10am to 12pm</option>
                                    <option value="10am to 1pm">10am to 1pm</option>
                                    <option value="2pm to 4pm">2pm to 4pm</option>
                                    <option value="5pm to 7pm">5pm to 7pm</option>
                                </select>
                                {/* <div className="form-group">
                                        <select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block"
                                            data-menu-style="">
                                            <option disabled selected>Select Time</option>
                                            <option value="1">10 AM to 12Am </option>
                                            <option value="2">2 PM to 4 PM </option>
                                            <option value="3">6 PM to 8 PM</option>
                                        </select> */}
                                
                                {/* <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: 10 to 5)" onKeyUp={(e) => addList({ ...getList, clinic_timing: e.target.value })} /> */}
                                {/* </div> */}
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h4> Consultation Fee</h4>
                                <hr />
                                {/* <button className="btn btn-danger btn-block"><i className="fa fa-inr" aria-hidden="true"></i>100</button> */}
                                <input type="number" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: 100)" onKeyUp={(e) => addList({ ...getList, consulting_fee: e.target.value })} />
                            </div>
                            <button  className="btn btn-primary btn-block btn-round w-25 mt-5" type="button" onClick={addSlotList}>ADD</button>
                        </div>

                        <hr />

                    </div>
                </div>
                <hr />
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h3 className="text-center title">  Added Visit Time List</h3>
                            <div className="col-md-10 ml-auto mr-auto">
                                <div className="table-responsive">
                                    <table className="table table-shopping">
                                        <thead>
                                            <tr>
                                                {/* <!-- <th className="text-center"></th>
                                            <th></th> --> */}
                                                <th className="text-center"><strong>Day</strong></th>
                                                <th className="text-center"><strong>Timing</strong></th>
                                                <th className="text-center"><strong>amount</strong></th>
                                                <th className="text-center"><strong>Delete</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                              slotList.map((e,index) =>{
                                                return (
                                                     // console.log(index)
                                                <tr>
                                                <td className="text-center">
                                                    <h6>{e.clinic_day}</h6>
                                                </td>
                                                <td className="td-number text-center">
                                                    <h6>{e.clinic_timing}</h6>
                                                </td>
                                                <td className="td-number text-center">
                                                    <h6>{e.consulting_fee}</h6>
                                                </td>
                                                <td className="td-number text-center">
                                                    <button  className="btn btn-outline-danger" type="button" onClick={()=>slotDelete(index)}>Delete</button>
                                                </td>
                                            </tr>
                                                )
                                              }
                                               
                                            )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-5 col-sm-8 " > 
                            <button className="btn btn-success btn-block" type="button" onClick={()=>{set_dispatch(get_slot_data(slotList))
                                                                                                        navigate("/doctor_home")
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}