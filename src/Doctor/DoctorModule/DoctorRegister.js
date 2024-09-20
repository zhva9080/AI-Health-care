export const DoctorRegister=()=>{
    return(<>
        <div className="register-page full-screen sidebar-collapse">
  {/* <!-- Navbar --> */}
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
              Doctor Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* <!-- End Navbar --> */}
 
  <div className="wrapper">
    <div className="page-header" style={{backgroundImage: "url('../../assets/img/sections/soroush-karimi.jpg');"}}>
      <div className="filter"></div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">
            <div className="info info-horizontal">
              <div className="icon">
                <i className="fa fa-umbrella"></i>
              </div>
              <div className="description">
                <h3> We've got you covered </h3>
                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. Everything you need in a single case.</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon">
                <i className="fa fa-map-signs"></i>
              </div>
              <div className="description">
                <h3> Clear Directions </h3>
                <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon">
                <i className="fa fa-user-secret"></i>
              </div>
              <div className="description">
                <h3> We value your privacy </h3>
                <p>Completely synergize resource taxing relationships via premier niche markets.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-5 col-12 mr-auto">
            <div className="card card-register">
              <h3 className="card-title text-center">Registration Form</h3>
              <div className="social">
                <button href="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                <button href="#paper-kit" className="btn btn-just-icon btn-google"><i className="fa fa-google"></i></button>
                <button href="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
              </div>
              <div className="division">
                <div className="line l"></div>
                <span>or</span>
                <div className="line r"></div>
              </div>
              <form className="register-form">
                <input type="text" className="form-control" placeholder="Dr. Name"/>
                <input type="text" className="form-control" placeholder="Doctor Id"/>
                <input type="text" className="form-control" placeholder="Hospital Name"/>
                <input type="text" className="form-control" placeholder="Hospital Location"/>
                <input type="text" className="form-control" placeholder="Specialist"/>
                <input type="text" className="form-control" data-color="success"  value="Oncologist, Neurologist, Anesthesiologist" data-role="tagsinput" placeholder="Specialist" />
                <input type="text" className="form-control" placeholder="Email"/>
                <input type="password" className="form-control" placeholder="City"/>
                <input type="password" className="form-control" placeholder="Contact No"/>
                <input type="password" className="form-control" placeholder="Create Password"/>
                <button className="btn btn-block btn-round">Register</button>
              </form>
              <div className="login">
                <p>Already have an account? <a href="#0">Log in</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-footer text-center">
        <h6>&copy; <script> 
            // document.write(new Date().getFullYear()) 
           </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim</h6>
      </div> 
    </div>
  </div>
  {/* <!--   Core JS Files   --> */}
  <script src="../../assets/js/core/jquery.min.js" type="text/javascript"></script>
  <script src="../../assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="../../assets/js/core/bootstrap.min.js" type="text/javascript"></script>
  {/* <!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ --> */}
  <script src="../../assets/js/plugins/bootstrap-switch.js"></script>
  {/* <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ --> */}
  <script src="../../assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
  {/* <!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker --> */}
  <script src="../../assets/js/plugins/moment.min.js"></script>
  <script src="../../assets/js/plugins/bootstrap-tagsinput.js"></script>
  {/* <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select --> */}
  <script src="../../assets/js/plugins/bootstrap-selectpicker.js" type="text/javascript"></script>
  {/* <!--	Plugin for Datetimepicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ --> */}
  <script src="../../assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
  {/* <!--  Plugin for presentation page - isometric cards  --> */}
  <script src="../../assets/js/plugins/presentation-page/main.js"></script>
  {/* <!--  Vertical nav - dots --> */}
  {/* <!--  Photoswipe files --> */}
  <script src="../../assets/js/plugins/photo_swipe/photoswipe.min.js"></script>
  <script src="../../assets/js/plugins/photo_swipe/photoswipe-ui-default.min.js"></script>
  <script src="../../assets/js/plugins/photo_swipe/init-gallery.js"></script>
  {/* <!--  for Jasny fileupload --> */}
  <script src="../../assets/js/plugins/jasny-bootstrap.min.js"></script>
  {/* <!-- Control Center for Paper Kit: parallax effects, scripts for the example pages etc --> */}
  <script src="../../assets/js/paper-kit.js?v=2.3.1" type="text/javascript"></script>
  {/* <!--  Google Maps Plugin    --> */}
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
</div>

    </>)
}