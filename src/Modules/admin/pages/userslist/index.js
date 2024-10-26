
import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"
import './index.css'


import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Adminusers = () => {

    let [users, setuser] = useState([])
    useEffect(() => {

    }, [])

    const navigate = useNavigate();


    const getusers = () => {
        axios.get("https://retheesha.pythonanywhere.com/getuserdata").then((e) => {
            setuser(e.data)
        })

    }

    useEffect(() => {
        getusers()
    }, [])


    return (
        <>

            <div className="add-product sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Header/>


                {/* <!-- End Navbar --> */}
                <div className="main">
                    <div className="section">
                            <h2 className="text-center title">Users  Details</h2>
                            <div className="col-md-15 ml-auto mr-auto">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th className="text-center" ><b>Name</b></th>
                                                <th className="text-center"><b>Mail Address</b></th>
                                                <th className="text-center"><b>Contact</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((eachh) =>
                                                <tr>
                                                    <td className="text-center">
                                                        <h6>{eachh.name}</h6>
                                                    </td>
                                                    <td className=" text-center">
                                                        <h6>{eachh.email}</h6>
                                                    </td>
                                                    <td className=" text-center">
                                                        <h6>{eachh.password}</h6>
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
        </>)
}
