export const UserRegister=()=>{
    return(<>
        <div className="register-page full-screen sidebar-collapse">
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
              User Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
 
 
  <div className="wrapper">
    <div className="page-header" style={{backgroundImage: "url('../../assets/img/sections/soroush-karimi.jpg')"}}>
      <div className="filter"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">
            <div className="info info-horizontal">
              <div className="icon">
                <i className="fa fa-stethoscope"></i>
              </div>
              <div className="description">
                <h3> We've got you covered </h3>
                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. Everything you need in a single case.</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon">
                <i className="fa fa-heartbeat"></i>
              </div>
              <div className="description">
                <h3> Clear Directions </h3>
                <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon">
                <i className="fa fa-lock"></i>
              </div>
              <div className="description">
                <h3>Data Security</h3>
                <p>We take appropriate measures to safeguard your personal health information. Our security practices include encryption, secure access controls, and staff training to protect against unauthorized access.</p>
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
                <input type="text" className="form-control" placeholder="Name"/>
                <input type="text" className="form-control" placeholder="Email"/>
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
            document.write(new Date().getFullYear())
          </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim</h6>
      </div>
    </div>
  </div>
  <script src="../../assets/js/core/jquery.min.js" type="text/javascript"></script>
  <script src="../../assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="../../assets/js/core/bootstrap.min.js" type="text/javascript"></script>
  <script src="../../assets/js/plugins/bootstrap-switch.js"></script>
  <script src="../../assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
  <script src="../../assets/js/plugins/moment.min.js"></script>
  <script src="../../assets/js/plugins/bootstrap-tagsinput.js"></script>
  <script src="../../assets/js/plugins/bootstrap-selectpicker.js" type="text/javascript"></script>
  <script src="../../assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
  <script src="../../assets/js/plugins/presentation-page/main.js"></script>
  <script src="../../assets/js/plugins/photo_swipe/photoswipe.min.js"></script>
  <script src="../../assets/js/plugins/photo_swipe/photoswipe-ui-default.min.js"></script>
  <script src="../../assets/js/plugins/photo_swipe/init-gallery.js"></script>
  <script src="../../assets/js/plugins/jasny-bootstrap.min.js"></script>
  <script src="../../assets/js/paper-kit.js?v=2.3.1" type="text/javascript"></script>
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
</div>

    </>)
}