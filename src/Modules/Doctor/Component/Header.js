import { Link } from "react-router-dom"


export const Header = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top bg-danger nav-down" color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-translate">
                            <Link className="navbar-brand" to="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
                                AI-Health-Care
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
                            <ul className="navbar-nav ml-auto">
                                <li className="dropdown nav-item">
                                    <Link to="/doctor_home" className="nav-link" data-toggle="dropdown" aria-expanded="false">Home</Link>
                                </li>
                                {/* <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">About</Link>
                                </li> */}
                                <li className="dropdown nav-item">
                                    <Link to="/doctor_slot" className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">Slot Entry</Link>
                                </li>
                                {/* <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">Contact</Link>
                                </li> */}
                                <li className="dropdown nav-item">
                                    <Link to="#" className="nav-link" id="navbarDropdownMenuLink1" data-toggle="dropdown">Dashboard</Link>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink1">
                                        <Link className="dropdown-item" to="/patients_history"><i className="nc-icon nc-bank"></i>History</Link>
                                        <Link className="dropdown-item" to="#"><i className="nc-icon nc-basket"></i>Profile</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-round btn-danger" to="https://www.creative-tim.com/product/paper-kit-2-pro" target="_blank">
                                        {/* <!-- <i className="nc-icon nc-cart-simple"></i> --> */}Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}