import React, { Component } from "react";
import ReactDOM from "react-dom"
import { Route, HashRouter, Switch, withRouter } from "react-router-dom";

import Aboutus from "../presentational/Aboutus";
import AsideContainer from "./AsideContainer";
import BlogContainer from "./BlogContainer";
import ContactusContainer from "./ContactusContainer";
import Corporative from "../presentational/Service/Corporative";
import FooterContainer from "./FooterContainer";
import HomeContainer from "./HomeContainer";
import Landing from '../presentational/Service/Landing';
import LatestworksContainer from "./LatestworksContainer";
import LoginContainer from './LoginContainer';
import Mobile from "../presentational/Service/Mobile"
import Portal from '../presentational/Service/Portal';
import ServiceContainer from "./ServiceContainer";

const Footer = withRouter(({location}) => {
    return (location.pathname == '/contactus') ? false : <FooterContainer/>;
});

class AppContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AsideContainer />
                <Switch>
                    <Route exact path='/' component={HomeContainer}/>
                    <Route path='/aboutus' component={Aboutus}/>
                    <Route exact path='/service' component={ServiceContainer}/>
                    <Route path='/service/landing' component={Landing}/>
                    <Route path='/service/mobile' component={Mobile}/>
                    <Route path='/service/portal' component={Portal}/>
                    <Route path='/service/corporative' component={Corporative}/>
                    <Route path='/blog' component={BlogContainer}/>
                    <Route path='/latestworks' component={LatestworksContainer}/>
                    <Route path='/contactus' component={ContactusContainer}/>
                    <Route path='/login' component={LoginContainer}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default AppContainer;

const Entry = document.getElementById("app");
Entry ? ReactDOM.render(
    <HashRouter>
        <AppContainer />
    </HashRouter>,
    Entry) : false;
