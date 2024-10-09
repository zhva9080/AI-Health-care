import { Header } from '../../component/Header';
import { Footer } from '../../component/Footer';
import { Link } from 'react-router-dom';
import './index.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Admindoctordetails = () => {


    const [view, setview] = useState([])
   
    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://agaram.academy/api/action.php?request=ai_health_viewdoctor&id=${id}`).then((viewdoctor) => {
            setview(viewdoctor.data.data)
            // console.log(viewdoctor.data.data)
        })
    }, [])



    return (
        <>


            <div className="add-product sidebar-collapse">
                {/* <!-- Navbar --> */}
                <Header />
               
                <br />

                {view.map((eachh) => <div>

                    <div className="typography-line">
                        <h1 className="text-primary"> {eachh.name} <i className="fa fa-stethoscope "></i>
                        </h1>
                    </div>
                    <br />


                    <div className="container">
                        <div className="col-md-8 col-sm-8">
                            <div className="card card-blog">
                                <div className="card-image">
                                    <a href="javascript:;">
                                        <img className="img" src="../../assets/img/faces/pexels-karolina-grabowska-4021779.jpg" />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {eachh.specialist} </h4>
                                    <hr />
                                    <div className="card-description">
                                        <h4>{eachh.doctorid}</h4>
                                    </div>
                                    <hr />
                                    <div className="card-description">
                                        <h4>{eachh.email}</h4>
                                    </div>
                                    <hr />
                                    <div className="card-description">
                                        <h4>{eachh.phone}</h4>
                                    </div>
                                    <hr />
                                    <div className="card-description">
                                        <h4>{eachh.city}</h4>

                                    </div>
                                    <hr />


                                        <div className="social">
                                            <button href="#paper-kit" className="btn btn-just-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                                            <button href="#paper-kit" className="btn btn-just-icon btn-google" ><i className="fa fa-google"></i></button>
                                            <button href="#paper-kit" className="btn btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div> 
                </div> )}

                <div className="col-md-4 offset-md-4 my-5 mx-6">

                    <Link to={"/admin/homepage"} className="btn btn-move-left btn-secondary btn-lg btn-round"><i class="nc-icon nc-minimal-left"></i>Back to home</Link>

                </div>
            </div >
            <Footer />
        </>
    )

}