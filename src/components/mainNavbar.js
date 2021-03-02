import React, {useState} from 'react'
import logoImg from '../Imgs/Group.svg'
import searchIcon from '../Imgs/Shape.svg'
import lockIcon from '../Imgs/Shape-2.svg'
import fbIcon from '../Imgs/Fill 1.svg'
import gIcon from '../Imgs/Grou.svg'
import robot from "../Imgs/Bitmap.svg";
import { Modal, Button } from "react-bootstrap";


const MainNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showJoin, setShowJoin] = useState(false);
  const handleCloseJoin = () => setShowJoin(false);
  const handleShowJoin = () => setShowJoin(true);


  const [state, setState] = useState({
    email:'',
    password:''
  });
  const [errors, setErrors] = useState({
    email:'',
    password:''
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })

    if(event.target.name === 'email'){
      if(event.target.value.indexOf('@') === -1){
        setErrors({
          ...errors,
          email: "Invalid Email Address"
        })
      }else{
        setErrors({
          ...errors,
          email: ""
        })
      }
    }
    if(event.target.name === 'password'){
      if(event.target.value.length < 8){
        setErrors({
          ...errors,
          password: "Please Enter Correct Password"
        })
      }else{
        setErrors({
          ...errors,
          password: ""
        })
      }
    }
  }


    return (
      <div>
        <div className="main-navbar">
          <div className="main-navbar-wrapper">
            <div className="navbar-logo">
              <img src={logoImg} />
              <h1>Inspocreate</h1>
            </div>
            <div className="search">
              <input type="text" placeholder="Try Women Empowerment" />
              <button><img src={searchIcon} /></button>
            </div>
            <div className="navbar-btns">
              <button onClick={handleShowLogin} className="navbar-btn-1"><img src={lockIcon} />Login</button>
              <button onClick={handleShowJoin} className="navbar-btn-2">Join Community</button>
            </div>
          </div>
      </div>

      {/* LOGIN MODAL */}
      <Modal size="lg" className='login-modal' centered show={showLogin} onHide={handleCloseLogin} animation={true}>
        <div className="modal-container">
        <span className="remove-modal" onClick={handleCloseLogin}>&times;</span>
          <div className="modal-header">
            <div className="modal-heading"><h1>Login</h1></div>
            <div className="login-btns">
              <button className='fb-login'><img src={fbIcon} />Sign Up With Facebook</button>
              <button className='g-login'><img src={gIcon} />Sign Up With Google</button>
            </div>
          </div>
          <div className="modal-body">
           <form>
            <h1>Login With Email</h1>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} placeholder="Email"/>
              {!!errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={handleChange} id="" placeholder="******"/>
              {!!errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>
            <div className="login-btns">
              <img src={robot} alt=""/>
              <button type="submit">Continue</button>
            </div>
           </form>
          </div>
          <div className="modal-footer">
            <p>Forget Password? <span>Reset</span> </p>
          </div>
        </div>
      </Modal>

      {/* JOIN COMMUNITY MODAL */}
      <Modal size="lg" className='modal join-modal' centered show={showJoin} onHide={handleCloseJoin} animation={true}>
      <div className="modal-container">
        <span className="remove-modal" onClick={handleCloseJoin}>&times;</span>
          <div className="modal-header">
            <div className="modal-heading"><h1>Join Our Community</h1></div>
            <div className="login-btns">
              <button className='fb-login'><img src={fbIcon} />Sign Up With Facebook</button>
              <button className='g-login'><img src={gIcon} />Sign Up With Google</button>
            </div>
          </div>
          <div className="modal-body">
           <form>
            <h1>Sign Up with Email</h1>
            <div className="name-inputs">
            <div className="form-field">
              <label htmlFor="name">First Name</label>
              <input type="name" name="firstname" placeholder="First Name"/>
            </div>
            <div className="form-field">
              <label htmlFor="name">Last Name</label>
              <input type="name" name="lastname" placeholder="Last Name"/>
            </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} />
              {!!errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="password">Email</label>
              <input type="password" name="password" placeholder="******" onChange={handleChange} />
              {!!errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>
            <div className="login-btns">
              <img src={robot} alt=""/>
              <button>Continue</button>
            </div>
           </form>
          </div>
          <div className="modal-footer">
            <p><input type="checkbox"/> I agree to <span>Terms and Conditions</span> </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MainNavbar;