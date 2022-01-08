import { Link } from "react-router-dom"
//we only added fa fa icons
//camel case manataory
import { FaUserAlt, FaSignInAlt, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa"

export default function Navbar({ title }) {
    return (
        <>
            {/* addding Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light pt-2 pb-2 ">
                <div className="container-fluid ">
                    <Link to="/" className="navbar-brand fs-0.5 me-5">
                        <img src="https://img.icons8.com/doodle/48/000000/wallet--v1.png" alt="" width="30" height="24" className="d-inline-block align-text-top me-2" />
                        Wallet</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-lik active" aria-current="page" href="/#">
                            Home</a> */}
                                <Link to="/" className="nav-link active " >Home</Link>
                                {/* fs-1 for ofnt increasing */}
                            </li>
                              <li className="nav-item">
                                <Link to="/Contact-Us" className="nav-link" >Contact-Us</Link>
                          </li>
                              <li className="nav-item">
                                <Link to="/About-Us" className="nav-link" >About</Link>

                          </li>
                            
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link " >Gallery</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success me-5 pr-5" type="submit">Search</button>
                        </form>
                        <div className="d-flex">

                            {/* Befre Login */}
                            <Link to="/signin" className="btn btn-success btn-sm me-3"><FaSignInAlt className="me-2" />
                                Login</Link>
                            {/* title="Click to ligin"  write inside className*/}
                            <Link to="/signup" className="btn btn-warning btm-sm me-2"><FaUserAlt className="me-2" />
                                Signup</Link>
                            {/* title="click to Sign up" */}


                            {/* After Login functions */}

                            {/* <Link to=" /" className="btn btn-info btn-sm me-2" title="Goto Dashboard">
                                <FaTachometerAlt />Profile</Link> */}
                            {/* <Link to=" " className="btn btn-danger btn-sm " title="Logout">
                                <FaSignOutAlt />Logout</Link> */}


                        </div>
                    </div>
                </div>
            </nav>
            {/* end of the Navbar */}

        </>
    )
}