import { Link } from "react-router-dom"
import './index.css'

export const Footer =()=>{
    return(
        <>
            <footer className="footer footer-black  footer-white">
                    <div className="container">
                        <div className="row">
                            <nav className="footer-nav col-12">
                                <div className="credits text-center">
                                    <span className="copyright">
                                        copyright © 2024 <i className="fa fa-heart heart"></i> AI Health Care. all rights reserved.
                                    </span>
                                </div>
                                {/* <ul className="d-inline float-end">
                                    <li><Link to="./user_login.html" target="_blank">Privacy Policy</Link></li>
                                    <li><Link to="./user_register.html" target="_blank">Contact</Link></li>
                                </ul> */}
                            </nav>
                            
                        </div>
                    </div>
                </footer>
        </>
    )
} 