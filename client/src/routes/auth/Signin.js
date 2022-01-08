import React from 'react'
import keyLogo from "../../assets/images/key.png"

export default function Signin() {
    return (
        <>
        <title>Login</title>
            <div className='container pt-4 pb-5'>
                <div className='signupform'>

                    <h2 className='text-center'>
                        <img src="https://img.icons8.com/doodle/48/000000/wallet--v1.png" alt="" className="me-2" />
                        Welcome to Wallet
                    </h2>
                    <p className='text-danger text-center'>Login to use our wallat app !</p>
                    <div className='row mt-4 mb-5 bg-light p-3 rounded'>

                        <div className='col-md-7 align-self-center pt-3'>
                            <h2 className='text-center'>
                                <img src="https://img.icons8.com/doodle/48/000000/wallet--v1.png" alt="" />

                            </h2>
                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Enter Email. eg. name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" placeholder="Enter Password. eg. Password@123" />
                                </div>
                                <button className='btn btn-primary me-3' type='submit' name="create-account">Login</button>
                                <button className='btn btn-danger' type='reset' name=''>Reset</button>
                            </form>
                        </div>
                        <div className='col-md-5 text-center rounded' style={{ background: "#E6E6FA" }}>
                            <img src={keyLogo} class="signup-logo pt-3 pe-3 ps-3" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
