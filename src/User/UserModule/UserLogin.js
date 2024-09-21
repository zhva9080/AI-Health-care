
export const UserLogin = () => {
    return (
        <>
            <div className="login-page full-screen sidebar-collapse">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-translate">
                            <a className="navbar-brand" href="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
                                AI HEALTH CARE
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" data-nav-image="../assets/img/blurred-image-1.jpg" data-color="orange">
                            <ul className="navbar-nav ml-auto">
                                <li className="dropdown nav-item">
                                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">
                                        Components </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-danger">
                                        <a href="../index.html" className="dropdown-item">
                                            All Components
                                        </a>
                                        <a href="../presentation.html" className="dropdown-item">
                                            Presentation
                                        </a>
                                        <a href="https://demos.creative-tim.com/paper-kit-2-pro/docs/1.0/getting-started/introduction.html" className="dropdown-item">
                                            Documentation
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown nav-item">
                                    <a href="#" className="dropdown-toggle nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        Sections
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" data-scroll="true" data-id="#headers" href="../sections.html#headers">
                                            <i className="nc-icon nc-tile-56"></i>
                                            Headers
                                        </a>
                        
                                    </div>
                                </li>
                                <li className="dropdown nav-item">
                                    <a href="#" className="dropdown-toggle nav-link" id="navbarDropdownMenuLink1" data-toggle="dropdown">
                                        About us
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink1">
                                        <a className="dropdown-item" href="../examples/about-us.html">
                                            <i className="nc-icon nc-bank"></i>
                                            About-us
                                        </a>
        
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-round btn-danger" href="https://www.creative-tim.com/product/paper-kit-2-pro" target="_blank">
                                        Register
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                        <p className="hidden-lg-up">Twitter</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                                        <i className="fab fa-facebook-square"></i>
                                        <p className="hidden-lg-up">Facebook</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                        <p className="hidden-lg-up">Instagram</p>
                                    </a>
                                </li>  */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}
                <div className="wrapper">
                    <div className="page-header" 
                    style={{backgroundImage: "url('../assets/img/sections/bruno-abatti.jpg')"}}
                    >
                        <div className="filter"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                                    <div className="card card-register">
                                        <h3 className="card-title">Welcome</h3>
                                        <form className="register-form">
                                            <label>Email</label>
                                            <input type="email" className="form-control no-border" placeholder="Email"/>
                                                <label>Password</label>
                                                <input type="password" className="form-control no-border" placeholder="Password"/>
                                                    <button className="btn btn-danger btn-block btn-round">Login</button>
                                                </form>
                                                <div className="forgot">
                                                    <a href="#paper-kit" className="btn btn-link btn-danger">Forgot password?</a>
                                                </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="demo-footer text-center">
                                    <h6>&copy; <script>
                                        document.write(new Date().getFullYear())
                                    </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim</h6>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}