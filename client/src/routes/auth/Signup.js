// use class components .they are in processing to the database
//we can easily access using the object 
//rather than using function and calling multiple times makes complex 
//class components takes less time and less memory retriving  the data
//makes it into packets and expands their 
import React, { Component } from 'react'
import signupLogo from "../../assets/images/signup.png"

export default class Signup extends Component {
    render() {
        return (
            <div>
                <title>Create Account</title>
                {/* <h2>This is Signup Page</h2> */}
                <div className="container pt-4 pb-5">

                    <div className='signupform'>

                        <h2 className='text-center'> 
                        <img src="https://img.icons8.com/doodle/48/000000/wallet--v1.png" alt="" className="me-2" />
                            Welcome to Wallet
                        </h2>
                        <p className='text-danger text-center'> Create account for free !!</p>
                    <div className="row  mt-4 mb-5 bg-light p-2 rounded">
                        <div className="col-md-4 text-center rounded" style={{ background: "#E6E6FA" }}>
                            {/* it will hold image */}
                            <img src={signupLogo} className='signup-logo pt-3 pe-3 ps-3' alt="Signup" />

                        </div>
                        <div className='col-md-8 align-self-center pt-3'>
                            <form >
                                <div class="mb-3">
                                    {/* <label class="form-label">Email</label> */}
                                    <input type="text" class="form-control" placeholder="Enter Name" />
                                </div>
                                <div class="mb-3">
                                    {/* <label class="form-label">Email</label> */}
                                    <input type="email" class="form-control" placeholder=" Enter email  eg : name@gmail.com" />
                                </div>
                                <div class="mb-3">
                                    {/* <label class="form-label">Email</label> */}
                                    <input type="text" class="form-control" placeholder="Enter password eg.Password@123" />
                                </div>
                                <div class="mb-3">
                                    {/* <label class="form-label">Email</label> */}
                                    <input type="text" class="form-control" placeholder="Confirm Password eg.Password@123" />
                                </div>

                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label text-danger" for="flexCheckDefault">
                                            Agree with wallet terms & conditions
                                            {/* make link tag here fr terms and  */}
                                        </label>
                                    </div>

                                    <button className="btn btn-primary me-3" type="submit" name="create-account">SignUp</button>
                                    <button className='btn btn-danger' type="reset" name="">Reset</button>

                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className='cngcol'>
                        explained media@query
                    </div> */}
            </div>
        )
    }
}
