import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"

export const PatientsList = ()=>{
    return(
        <>
            <Header/>
            <div class="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                    <div className="container">
                        <h3 className="text-center title">Booking Patient</h3>
                        <div className="col-md-10 ml-auto mr-auto">
                        <div className="table-responsive">
                            <table className="table table-shopping">
                            <thead>
                                <tr>
                                {/* <!-- <th className="text-center"></th>
                                <th></th> --> */}
                                <th className="text-center">Name</th>
                                <th className="text-center">Time</th>
                                <th className="text-center">Phone</th>
                                <th className="text-center">Disease</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="text-center">
                                    <h6>Gan</h6>
                                </td>
                                <td className="td-product text-center">
                                    <h6>10 am to  12 am</h6>
                                </td>
                                <td className="td-price text-center">
                                    <h6>+91 7852862234</h6>
                                </td>
                                <td className="td-price text-center">
                                    <h6>Fever</h6>
                                </td>
                                </tr>
                                <tr>
                                <td className="text-center">
                                    <h6>Gan</h6>
                                </td>
                                <td className="td-product text-center">
                                    <h6>10 am to  12 am</h6>
                                </td>
                                <td className="td-price text-center">
                                    <h6>+91 7852862234</h6>
                                </td>
                                <td className="td-price text-center">
                                    <h6>Fever</h6>
                                </td>
                                </tr>
                                <tr>
                                <td className="text-center">
                                    <h6>Gan</h6>
                                </td>
                                <td className="td-product text-center">
                                    <h6>10 am to  12 am</h6>
                                </td>
                                <td className="td-price text-center">
                                    <h6>+91 7852862234</h6>
                                </td>
                                <td className="td-price text-center">
                                    <h6>Fever</h6>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}