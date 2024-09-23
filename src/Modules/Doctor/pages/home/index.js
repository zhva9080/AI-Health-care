import { Link } from "react-router-dom"
import { Footer } from "../../Component/Footer"
import { Header } from "../../Component/Header"

export const Doctor_Home = () => {
    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h4 className="title"><small></small></h4>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card card-pricing" data-color="orange">
                                        <div className="card-body">
                                            <div className="card-icon">
                                                <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                            </div>
                                            <h3 className="card-title">12/08/2024</h3>
                                            <p className="card-description">
                                                10am-12am
                                            </p>
                                            <div className="card-footer">
                                                <Link to="javascript:;" className="btn btn-neutral btn-round">13 patients</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-pricing" data-color="orange">
                                        <div className="card-body">
                                            <div className="card-icon">
                                                <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                            </div>
                                            <h3 className="card-title">12/08/2024</h3>
                                            <p className="card-description">
                                                10am-12am
                                            </p>
                                            <div className="card-footer">
                                                <Link to="javascript:;" className="btn btn-neutral btn-round">13 patients</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-pricing" data-color="orange">
                                        <div className="card-body">
                                            <div className="card-icon">
                                                <span className="icon-simple"><i className="nc-icon nc-circle-10"></i></span>
                                            </div>
                                            <h3 className="card-title">12/08/2024</h3>
                                            <p className="card-description">
                                                3pm-4pmm
                                            </p>
                                            <div className="card-footer">
                                                <Link to="#" className="btn btn-neutral btn-round">No booking</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}