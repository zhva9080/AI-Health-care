
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'


export const Header = () => {

    let loginname = useSelector((state) => state.login).adminlogin

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#5F9EA0"}} >
                <div className="container mt-3 mb-3 " style={{maxWidth: "1240px"}}>
                    <div className="navbar-translate">

                        <img className="logo" style={{ width: "50%" }} src="../../assets/img/sections/admin/AIH_Logo_CP.png" />
                        {/* <a className="navbar-brand" href="javascript:;">AI-Health-Care / Admin Page</a> */}
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="dropdown nav-item mr-5">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                    Directory </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-primary">
                                    <Link className="dropdown-item" to={"/admin/homepage"}>Doctors<i className="fa fa-stethoscope  text-success"></i></Link>

                                    <Link className="dropdown-item" to={"/admin/userlist"}>Users<i className="nc-icon nc-single-02 text-info"></i></Link>

                                </div>
                            </li>
                            <li className="dropdown nav-item">
                                <a className="dropdown-toggle nav-link" style={{color:"white"}} data-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user-circle-o " aria-hidden="true"></i>
                                    {loginname.email}

                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-primary" >
                                    <Link className="dropdown-item" to={"/admin/about"}>About <i class="nc-icon nc-bank" aria-hidden="true"></i>
                                    </Link>
                                    <Link className="dropdown-item" to={"/admin/login"}>Logout <i class="fa fa-sign-out " aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}