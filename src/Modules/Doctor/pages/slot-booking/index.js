import { useState } from "react"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"
import { useEffect } from "react"

export const DoctorSlot = () => {

    let slotList = []

    const [getList, addList] = useState(
        {
            clinic_day: "",
            clinic_timing: "",
            consulting_fee: null
        }
    )

    // if(!localStorage.getItem,getListData){
    //     localStorage.setItem(getListData,"[]")
    // }


    const addSlotList = () => {

        // slotList.push(getList)
        let a = [...slotList, getList]
        console.log(a)

    }


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
                                <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: Sunday)" onKeyUp={(e) => addList({ ...getList, clinic_day: e.target.value })} />
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h4>Timing</h4>
                                <hr />
                                {/* <div className="form-group">
                                        <select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block"
                                            data-menu-style="">
                                            <option disabled selected>Select Time</option>
                                            <option value="1">10 AM to 12Am </option>
                                            <option value="2">2 PM to 4 PM </option>
                                            <option value="3">6 PM to 8 PM</option>
                                        </select> */}
                                <input type="text" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: 10 to 5)" onKeyUp={(e) => addList({ ...getList, clinic_timing: e.target.value })} />
                                {/* </div> */}
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h4> Consultation Fee</h4>
                                <hr />
                                {/* <button className="btn btn-danger btn-block"><i className="fa fa-inr" aria-hidden="true"></i>100</button> */}
                                <input type="number" className="form-control no-border bg-secondary text-white" placeholder="Enter Day (Ex: 100)" onKeyUp={(e) => addList({ ...getList, consulting_fee: e.target.value })} />
                            </div>
                            <button className="btn btn-primary btn-block btn-round w-25 mt-5" onClick={addSlotList}>ADD</button>
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
                                                <th className="text-center"><strong>Edit</strong></th>
                                                <th className="text-center"><strong>Delete</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                slotList.map((e) => {
                                                        alert()
                                                    return (
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
                                                            <td className="td-number td-quantity text-center">
                                                                <button type="button" className="btn btn-outline-info ">Edit</button>
                                                            </td>
                                                            <td className="td-number text-center">
                                                                <button type="button" className="btn btn-outline-danger ">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }



                                            <tr>
                                                <td className="text-center">
                                                    <h6>Sunday</h6>
                                                </td>
                                                <td className="td-number text-center">
                                                    <h6>10 AM to 12 AM</h6>
                                                </td>
                                                <td className="td-number td-quantity text-center">
                                                    <button type="button" className="btn btn-outline-info ">Edit</button>
                                                </td>
                                                <td className="td-number text-center">
                                                    <button type="button" className="btn btn-outline-danger ">Delete</button>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td className="text-center">
                                                    <h6>Monday</h6>
                                                </td>
                                                <td className="td-number text-center">
                                                    <h6>6 PM to 8 PM</h6>
                                                </td>
                                                <td className="td-number td-quantity text-center">
                                                    <button type="button" className="btn btn-outline-info ">Edit</button>
                                                </td>
                                                <td className="td-number text-center">
                                                    <button type="button" className="btn btn-outline-danger">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <h6>Tuesday</h6>
                                                </td>
                                                <td className="td-number text-center">
                                                    <h6>2 PM to 5 PM</h6>
                                                </td>
                                                <td className="td-number td-quantity text-center">
                                                    <button type="button" className="btn btn-outline-info ">Edit</button>
                                                </td>
                                                <td className="td-number text-center">
                                                    <button type="button" className="btn btn-outline-danger">Delete</button>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-5 col-sm-8 " >
                            <button className="btn btn-success btn-block">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}