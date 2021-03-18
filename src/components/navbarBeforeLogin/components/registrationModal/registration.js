import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../../../axios'
import { AuthContext } from '../../../../context/auth'
import fbIcon from '../../../../assets/Imgs/Fill 1.svg'
import gIcon from '../../../../assets/Imgs/Grou.svg'
import robot from "../../../../assets/Imgs/Bitmap.svg";
import companyIcon from '../../../../assets/Imgs/urs path.svg'
import personIcon from '../../../../assets/Imgs/our path.svg'
import { Modal, Button } from "react-bootstrap";

const RegistrationModal = (props) => {
    const handleCloseJoin = () => props.setShowJoin(false);

//  //  FORM VALIDATION
    // const [state, setState] = useState({
    //   email:'',
    //   password:''
    // });
    // const [errors, setErrors] = useState({
    //   email:'',
    //   password:''
    // });
    // const handleChange = (event) => {
    //   setState({
    //     ...state,
    //     [event.target.name]: event.target.value
    //   })

    //   if(event.target.name === 'email'){
    //     if(event.target.value.indexOf('@') === -1){
    //       setErrors({
    //         ...errors,
    //         email: "Invalid Email Address"
    //       })
    //     }else{
    //       setErrors({
    //         ...errors,
    //         email: ""
    //       })
    //     }
    //   }
    //   if(event.target.name === 'password'){
    //     if(event.target.value.length < 8){
    //       setErrors({
    //         ...errors,
    //         password: "Please Enter Correct Password"
    //       })
    //     }else{
    //       setErrors({
    //         ...errors,
    //         password: ""
    //       })
    //     }
    //   }
    // }



    const authContext = useContext(AuthContext)
    const history = useHistory();
    const [userType, setUserType] = useState('User')
    const [signupState, setSignupState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        cname: "",
        bType: "",
        rType: ""
    });
    const handleChangej = (e) => {
        const newState = { ...signupState }
        newState[e.target.name] = e.target.value
        setSignupState({
            ...newState,
        })
    }
    const handleSubmitj = (e) => {
        e.preventDefault();
        axios.post('/auth/register', { ...signupState, username: signupState.email, rType: userType })
            .then(response => {
                authContext.actions.updateState(response.data)
                if (response.data.pendingOperations.includes('createProfile')) {
                    history.push('/create-profile')
                }
                console.log(response)
            }).catch((error) => {
                console.error(error.response)
            });
    }
    return (
        <div>
            <Modal size="lg" className='modal join-modal' centered show={props.showJoin} onHide={handleCloseJoin} animation={true}>
                <div className="modal-container">
                    <span className="remove-modal" onClick={handleCloseJoin}>&times;</span>
                    <div className="modal-header">
                        <div className="modal-heading"><h1>Join Our Community</h1></div>
                        <div className="user-type">
                            <button className='person' onClick={() => setUserType('User')}><img src={personIcon} />Individual</button>
                            <button className='company' onClick={() => setUserType('Mentor')}><img src={companyIcon} />Company</button>
                        </div>
                        {userType === 'User' && <>
                            <div className="social-login-btns">
                                <button className='fb-login'><img src={fbIcon} />Sign Up With Facebook</button>
                                <button className='g-login'><img src={gIcon} />Sign Up With Google</button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmitj}>
                                    <h1>Sign Up with Email</h1>
                                    <div className="name-inputs">
                                        <div className="form-field">
                                            <label htmlFor="name">First Name</label>
                                            <input type="name" className="mr" name="firstName" placeholder="First Name" onChange={handleChangej} />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="name">Last Name</label>
                                            <input type="name" name="lastName" placeholder="Last Name" onChange={handleChangej} />
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" placeholder="Email" onChange={handleChangej} />
                                        {/* {!!errors.email && (
                                            <small className="text-danger">{errors.email}</small>
                                            )} */}
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="password">Email</label>
                                        <input type="password" name="password" placeholder="******" onChange={handleChangej} />
                                        {/* {!!errors.password && (
                                            <small className="text-danger">{errors.password}</small>
                                        )} */}
                                    </div>
                                    <div className="login-btns">
                                        <img src={robot} alt="" />
                                        <button type="submit">Continue</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer m-footer">
                                <p><input type="checkbox" /> I agree to <span>Terms and Conditions</span> </p>
                            </div>
                        </>}
                        {userType === 'Mentor' && <>
                            <div className="social-login-btns">
                                <button className='fb-login'><img src={fbIcon} />Sign Up With Facebook</button>
                                <button className='g-login'><img src={gIcon} />Sign Up With Google</button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmitj}>
                                    <h1>Sign Up with Email</h1>
                                    <div className="mentor-inputs">
                                        <div className="form-field">
                                            <label htmlFor="company">Company Name</label>
                                            <input type="name" name="firstName" placeholder="Enter Your Company Name" onChange={handleChangej} />
                                        </div>
                                        <div className="form-field">
                                            <label >Business Type</label>
                                            <select name="Bussiness-Type" className="select-type">
                                                <option value="">Business Coach/Consultant</option>
                                                <option value="">Personal Development Coach/ Consultant</option>
                                                <option value="">Empowerment/Motivational Business</option>
                                                <option value="">Marketing Business</option>
                                                <option value="">Other (Please specify)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" placeholder="Email" onChange={handleChangej} />
                                        {/* {!!errors.email && (
                                          <small className="text-danger">{errors.email}</small>
                                        )} */}
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="password">Email</label>
                                        <input type="password" name="password" placeholder="******" onChange={handleChangej} />
                                        {/* {!!errors.password && (
                                       <small className="text-danger">{errors.password}</small>
                                      )} */}
                                    </div>
                                    <div className="login-btns">
                                        <img src={robot} alt="" />
                                        <button type="submit">Continue</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer m-footer">
                                <p><input type="checkbox" /> I agree to <span>Terms and Conditions</span> </p>
                            </div>
                        </>}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default RegistrationModal