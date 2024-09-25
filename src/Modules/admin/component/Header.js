
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'


export const Header = () => {

    let loginname = useSelector((state) => state.login).adminlogin

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container">
                    <a className="navbar-brand" href="javascript:;">AI-Health-Care/ Admin Page</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="dropdown nav-item">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">
                                    Components </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-info">
                                    <Link className="dropdown-item" to={"/admin_homepage"}>Doctors List</Link>

                                    <Link className="dropdown-item" to={"/admin_userlist"}>Users list</Link>

                                </div>
                            </li>
                            <li className="dropdown nav-item">
                                <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user-circle-o  " aria-hidden="true"></i>
                                    {loginname.email}

                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-danger">
                                    <Link className="dropdown-item" to={"/admin_about"}>About <i class="nc-icon nc-bank" aria-hidden="true"></i>
                                    </Link>
                                    <Link className="dropdown-item" to={"/admin_login"}>Logout <i class="fa fa-sign-out" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav></>
    )
}