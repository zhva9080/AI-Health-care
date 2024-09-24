import { Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { register_details } from "../../slices/RegisterSlice"
import axios from "axios"
export const Profile = () => {
    const userLoginvalue=useSelector((state)=>state.userlogin).logindetails
    const userStatevalue=useSelector((state)=>state.userRegister).registerData
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const edit = () => {
        const formdata=new FormData();
       formdata.append("request",userStatevalue.request)
       formdata.append("name",userStatevalue.name)
       formdata.append("email",userStatevalue.email)
       formdata.append("password",userStatevalue.password)
       formdata.append("aadhar",userStatevalue.aadhar)
       formdata.append("address",userStatevalue.address)
       formdata.append("phone",userStatevalue.phone)
       formdata.append("city",userStatevalue.city)
       formdata.append("area",userStatevalue.area)
       formdata.append("pin",userStatevalue.pin)
        axios.post(`http://agaram.academy/api/action.php?request=${userStatevalue.request}`,formdata).then((res)=>{

            console.log(res)
        })
        
    }
    
    return (<>
        <div className="add-product sidebar-collapse">
            <div className="col-lg-6 col-md-6 col-sm-5 col-12 mr-auto mx-auto">
                {/* <div className="card card-register"> */}
                    <h3 className="card-title text-center">Edit profile</h3>
                    {/* <div className="division">
                        <div className="line l"></div>
                        <span>or</span>
                        <div className="line r"></div>
                    </div> */}
                    <div className="register-form">
                        <input type="text" className="form-control" placeholder="Name" value={userLoginvalue.name} onChange={(e)=>dispatch(register_details({...userStatevalue,name:e.target.value}))}/>
                        <input type="text" className="form-control" placeholder="Email" onKeyUp={(e)=>dispatch(register_details({...userStatevalue,email:e.target.value}))}/>
                        <input type="password" className="form-control" placeholder="Contact No" onKeyUp={(e)=>dispatch(register_details({...userStatevalue,phone:e.target.value}))}/>
                        <input type="password" className="form-control" placeholder="Create Password" onKeyUp={(e)=>dispatch(register_details({...userStatevalue,password:e.target.value}))}/>
                        <button className="btn btn-block btn-round" onClick={() => edit()}>Update </button>
                    </div>
                    
                </div>
                {/* </div> */}
            </div>
        </>)
}