import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { register_details } from "../../slices/RegisterSlice"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
export const UserRegister = () => {
  const userStatevalue = useSelector((state) => state.userRegister).registerData
  const dispatch = useDispatch()
  // console.log(userStatevalue)
  const navigate=useNavigate()
  const register = () => {
    navigate("/user/login")
    const formdata = new FormData();
    formdata.append("request", userStatevalue.request)
    formdata.append("name", userStatevalue.name)
    formdata.append("email", userStatevalue.email)
    formdata.append("password", userStatevalue.password)
    formdata.append("phone", userStatevalue.phone)
    axios.post(`http://agaram.academy/api/action.php?request=${userStatevalue.request}`, formdata).then((res) => {

      console.log(res)
    })

  }
  return (<>
    <div className="register-page full-screen sidebar-collapse">

      <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand" data-placement="bottom" target="_blank" to={"/user/register"}>
              AI-Health-Care
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          {/* <div className="collapse navbar-collapse" data-nav-image="../../assets/img/blurred-image-1.jpg" data-color="orange">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="btn btn-round btn-danger">
              User Register
            </Link>
          </li>
        </ul>
      </div> */}
        </div>
      </nav>


      <div className="wrapper">
        <div className="page-header" style={{ backgroundImage: "url('../assets/img/sections/pexels-shkrabaanthony-5214962.jpg')" }}>
          <div className="filter"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-7 col-12 ml-auto">

                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-heartbeat"></i>
                  </div>
                  <div className="description">
                    <h3> Clear Directions </h3>
                    <p>we  recommended medicines and foods that prescribed by siddha & allopathic forms.</p>
                  </div>
                </div>



                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-stethoscope"></i>
                  </div>
                  <div className="description">
                    <h3> We have Certified Doctors </h3>
                    <p>They reviewing your symptoms and test results & They have diagnosed you with . To manage this condition, prescribing Medicines at a  correct level of Dosage . This medication should help alleviate your symptoms and improve your overall health.</p>
                  </div>
                </div>

                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-user-secret"></i>
                  </div>
                  <div className="description">
                    <h3> We value your privacy </h3>
                    <p>we manage and maintaining your private info and make it safe & secure.
                      Your data’s security is our top concern, and we are committed to maintaining the highest standards of privacy protection.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-5 col-12 mr-auto">
                <div className="card card-register">
                  <h3 className="card-title text-center">User Registration</h3>
                  {/* <div className="social">
                    <button href="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                    <button href="#paper-kit" className="btn btn-just-icon btn-google"><i className="fa fa-google"></i></button>
                    <button href="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                  </div> */}
                  <div className="division">
                    <div className="line l"></div>
                    <span>or</span>
                    <div className="line r"></div>
                  </div>
                  <div className="register-form">
                    <input type="text" className="form-control" placeholder="Name" onKeyUp={(e) => dispatch(register_details({ ...userStatevalue, name: e.target.value }))} />
                    <input type="text" className="form-control" placeholder="Email" onKeyUp={(e) => dispatch(register_details({ ...userStatevalue, email: e.target.value }))} />
                    <input type="text" className="form-control" placeholder="Contact No" onKeyUp={(e) => dispatch(register_details({ ...userStatevalue, phone: e.target.value }))} />
                    <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e) => dispatch(register_details({ ...userStatevalue, password: e.target.value }))} />
                    <button className="btn btn-block btn-round" onClick={() => register()}>Register</button>
                  </div>
                  <div className="login">
                    <p>Already have an account? <Link to="/user/login">Log in</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </>)
}