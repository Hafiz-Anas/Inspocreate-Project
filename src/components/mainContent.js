import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContentNavbar from "./mainContentComponents/navbar";
import Trending from "./mainContentComponents/trending";
import Latest from "./mainContentComponents/latest";
import Company from "./mainContentComponents/company";


const MainContent = () => {
    return (
      <div className="wrapper">
        <MainContentNavbar />
        <Switch>
          <Route exact path='/home/latest' component={Latest} />
          <Route exact path='/home/company' component={Company} />
          <Route exact path='/home/trending' component={Trending}/>
        </Switch>
      </div>
    )
}

export default MainContent