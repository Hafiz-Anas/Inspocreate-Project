import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContentNavbar from "./mainContentComponents/navbar";
import Trending from "./mainContentComponents/trending";
import Latest from "./mainContentComponents/latest";
import Company from "./mainContentComponents/company";

const MainContent = () => {
    return (
        <BrowserRouter>
        <div className="wrapper">
          <MainContentNavbar />
          <Switch>
            <Route exact path='/' component={Trending}/>
            <Route path='/latest' component={Latest} />
            <Route path='/company' component={Company} />
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default MainContent