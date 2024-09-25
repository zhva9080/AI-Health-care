
import { Header } from "../../component/Header"
import { Footer } from "../../component/Footer"

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
        axios.get("http://agaram.academy/api/action.php?request=getAllMembers").then((e) => {
            setuser(e.data.data)
        })

    }
    useEffect(() => {
        getusers()
    }, [])


    return (
        <>

            <div class="add-product sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Header/>

                
                {/* <!-- End Navbar --> */}
                <div class="main">
                    <div class="section ">
                        <div class="container">
                            <h2 class="text-center title">Users  Details</h2>
                            <div class="col-md-15 ml-auto mr-auto">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="table-secondary">
                                            <tr>
                                                <th class="text-center" ><b>Name</b></th>
                                                <th class="text-center"><b>Mail</b></th>
                                                <th class="text-center"><b>Contact</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((eachh) =>
                                                <tr>
                                                    <td class="text-center">
                                                        <h6>{eachh.name}</h6>
                                                    </td>
                                                    <td class=" text-center">
                                                        <h6>{eachh.email}</h6>
                                                    </td>
                                                    <td class=" text-center">
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
            </div>
<Footer/>
        </>)
}
