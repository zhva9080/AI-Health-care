import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"

export const Patient_History = () => {
    return (
        <>
            <Header/>
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h4 className="title"><small></small></h4>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center">S.No</th>
                                            <th></th>
                                            <th>Day</th>
                                            <th>Addent Count</th>
                                            <th className="text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Monday</td>
                                            <td>25</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">2</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Tuesday</td>
                                            <td>25</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">3</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                            <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Wednesday</td>
                                            <td>25</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td className="td-total">
                                                Total
                                            </td>
                                            <td className="td-price">
                                                <small>&euro;</small>12,999
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer/>
        </>
    )
}