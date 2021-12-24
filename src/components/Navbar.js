import { Link } from "react-router-dom"
export default function Navbar({ title }) {
    return (
        <>
            {/* addding Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light pt-2 pb-2">
                <div className="container">
                    <Link to="/" className="navbar-brand fs-0.5">
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
                                <Link to="/" className="nav-link active fs-1" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact-Us" className="nav-link" >Contact-Us</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link " >Gallery</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success me-4" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* end of the Navbar */}

        </>
    )
}