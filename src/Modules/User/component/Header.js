import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export const Header=()=>{
    const userLoginvalue=useSelector((state)=>state.userlogin).logindetails
    return(<>
        <nav className="navbar navbar-expand-lg fixed-top bg-danger nav-down">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
                            AI-Health-Care
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
                        <ul className="navbar-nav ml-auto">
                            <li className="dropdown nav-item">
                                <Link to="/user/home" className="nav-link" data-toggle="dropdown" aria-expanded="false">Home</Link>
                                
                            </li>
                            <li className="dropdown nav-item">
                                <Link to="/user/doctorapp" className="nav-link" id="navbarDropdownMenuLink">
                                    Doctor Booking
                                </Link>
                                
                            </li>
                            <li className="dropdown nav-item">
                                <a href="#" className="nav-link" id="navbarDropdownMenuLink1" data-toggle="dropdown">
                                    Contact
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink1">
                                    <a className="dropdown-item" href="../examples/about-us.html">
                                        <i className="nc-icon nc-bank"></i>
                                        About-us
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown nav-item">
                                <a className="btn btn-round btn-danger nav-link " id="navbarDropdownMenuLink" data-toggle="dropdown">
                                 <i class="nc-icon nc-circle-10"></i>
                                    {userLoginvalue.name}
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/user/editprofile">
                                        <i className="nc-icon nc-bank"></i>
                                        Edit profile
                                    </Link>
                                    <Link className="dropdown-item" to="/user/history">
                                        <i className="nc-icon nc-bank"></i>
                                        History
                                    </Link>
                                    <Link className="dropdown-item" to="/user/login" >
                                        <i className="nc-icon nc-bank"></i>
                                       logout
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>)
}