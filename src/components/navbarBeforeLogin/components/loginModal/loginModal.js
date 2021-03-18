import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../../../axios'
import { AuthContext } from '../../../../context/auth'
import fbIcon from '../../../../assets/Imgs/Fill 1.svg'
import gIcon from '../../../../assets/Imgs/Grou.svg'
import robot from "../../../../assets/Imgs/Bitmap.svg";
import { Modal, Button } from "react-bootstrap";


const LoginModal = (props) => {
    const handleCloseLogin = () => props.setShowLogin(false);

    
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

    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const newState = { ...loginState }
        newState[e.target.name] = e.target.value
        setLoginState({
            ...newState,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/auth/login', { ...loginState })
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
            <Modal size="lg" className='login-modal' centered show={props.showLogin} onHide={handleCloseLogin} animation={true}>
                < div className="modal-container" >
                    <span className="remove-modal" onClick={handleCloseLogin}>&times;</span>
                    <div className="modal-header">
                        <div className="modal-heading"><h1>Login</h1></div>
                        <div className="login-btns">
                            <button className='fb-login'><img src={fbIcon} />Sign Up With Facebook</button>
                            <button className='g-login'><img src={gIcon} />Sign Up With Google</button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <h1>Login With Email</h1>
                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" onChange={handleChange} placeholder="Email" />
                                {/* {!!errors.email && (
                                    <small className="text-danger">{errors.email}</small>
                                )} */}
                            </div>
                            <div className="form-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" onChange={handleChange} placeholder="******" />
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
                        <p>Forget Password? <span>Reset</span> </p>
                    </div>
                </div >
            </Modal>

        </div>
    )
}

export default LoginModal


// useEffect(() => {
//     if (authContext.state) {
//         props.setShowLogin(false)
//     }
// }, [authContext])