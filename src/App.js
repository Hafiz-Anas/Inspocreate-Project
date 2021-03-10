import React from 'react'
import { BrowserRouter } from "react-router-dom";
import MainNavbar from './components/logoutNavbar'
import MainNavbarTwo from './components/loginNavbar'
import FooterSection from './components/footer'
import { Switch, Route } from "react-router-dom";
import { AuthContextProvider, AuthContext } from "./context/auth";
import Home from './views/Home'
// USER PROFILE
import UserProfile  from './components/userSection/userProfile';
import Followers from "./components/userSection/followers";
import Following from "./components/userSection/following";
import Collection from "./components/userSection/collection";
// USER SETTINGS
import UserSettings from './components/userSettingsComponents/userSettings'
import UserSettingsNavbar from "./components/userSettingsComponents/userSettingsNavbar";
import Account from "./components/userSettingsComponents/account";
import Notification from "./components/userSettingsComponents/notification";
import Interests from "./components/userSettingsComponents/interests";
import Privacy from "./components/userSettingsComponents/privacy";

import CreateProfile from './components/registeredUserComponents/createProfile'


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
              {/* <Home /> */}
              <Switch>
                <Route path='/home' component={Home}/>
                {/* USER PROFILE */}
                <Route exact path='/userSection/userProfile' component={UserProfile} />
                <Route exact path='/userSection/userProfile/followers' component={Followers} />
                <Route path='/userSection/userProfile/following' component={Following} />
                <Route path='/userSection/userProfile/collection' component={Collection}/>
                {/* USER SETTINGS */}
                <Route exact path='/userSettingsComponents/userSettings' component={UserSettings} />
                <Route exact path='/userSettingsComponents/userSettings/userSettingsNavbar' component={UserSettingsNavbar} />
                <Route path='/userSettingsComponents/userSettings/account' component={Account} />
                <Route path='/userSettingsComponents/userSettings/notification' component={Notification}/>
                <Route path='/userSettingsComponents/userSettings/interests' component={Interests}/>
                <Route path='/userSettingsComponents/userSettings/privacy' component={Privacy}/>
                <Route path='/create-profile' component={CreateProfile} />
              </Switch>
              <FooterSection />
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