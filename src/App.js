import React from 'react'
import { BrowserRouter } from "react-router-dom";
import MainNavbar from './components/navbarBeforeLogin'
import MainNavbarTwo from './components/navbarAfterLogin'
import {Footer} from './components'
import { Switch, Route } from "react-router-dom";
import { AuthContextProvider, AuthContext } from "./context/auth";
// VIEWS
import { Home } from './views'
import { Activity } from './views'
// USER PROFILE
import UserProfile  from './components/userProfile/userProfile';
// USER SETTINGS
import UserSettings from './components/userSettings/userSettings'
// CREATE PROFILE FOR NEW USER
import CreateProfile from './components/registeredUser/'
// UPLOADED POST
import UploadedPost from './components/navbarAfterLogin/components/addPostModal/components/uploadedPost'

const App = () => {
  return (
    <div className='app'>
    <BrowserRouter>
      <AuthContextProvider>
        <AuthContext.Consumer>
          {(value) => {
            return (
              <>
              {!value.state && (
                <MainNavbar />
              )}
              {!!value.state && (
                <MainNavbarTwo />
              )}
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/Activity' component={Activity}/>
                {/* USER PROFILE */}
                <Route path='/userProfile' component={UserProfile} />
                {/* USER SETTINGS */}
                <Route path='/userSettings' component={UserSettings} />
                {/* CREATE PROFILE */}
                <Route path='/create-profile' component={CreateProfile} />
                {/* UPLOADED POST */}
                <Route path="/uploadedPost" component={UploadedPost} />
              </Switch>
              <Footer />
              </>
            )
          }}
        </AuthContext.Consumer>
      </AuthContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App