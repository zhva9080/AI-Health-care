
export const DoctorLogin = () => {
    return (<>
        <div className="login-page full-screen sidebar-collapse">
            <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
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
                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <a className="btn btn-round btn-danger" href="https://www.creative-tim.com/product/paper-kit-2-pro" target="_blank">
                                    <i className="nc-icon nc-cart-simple"></i>
                                    Doctor Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar */}
            <div className="wrapper">
                <div className="page-header" style={{backgroundImage: "url('../../assets/img/sections/bruno-abatti.jpg');"}}>
                    <div className="filter"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                                <div className="card card-register">
                                    <h3 className="card-title">Welcome</h3>
                                    <form className="register-form">
                                        <label>Email</label>
                                        <input type="email" className="form-control no-border" placeholder="Email" />
                                        <label>Password</label>
                                        <input type="password" className="form-control no-border" placeholder="Password" />
                                        <button className="btn btn-danger btn-block btn-round">Register</button>
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
                            </script>, made with <i className="fa fa-heart heart"></i> by AI_Health_Care</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}