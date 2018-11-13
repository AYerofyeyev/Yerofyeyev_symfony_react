import React, { Component } from "react";
import { Link } from "react-router-dom";

import MainMenuLi from "../presentational/MainMenuLi";

class AsideContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainMenu: []
        };
        this.getMainMenu = this.getMainMenu.bind(this);
    }

    getMainMenu(result){
        this.setState(() => ({
            mainMenu: result
        }))
    }

    componentWillMount(){
        let that = this;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/menu');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                that.getMainMenu(JSON.parse(xhr.response));
            }
        };
        xhr.send();
    }

    render() {
        return (
            <aside>
                <div id="show"><i className ="fa fa-angle-double-right" aria-hidden="true"></i></div>
                <div id="hide"><i className ="fa fa-angle-double-left" aria-hidden="true"></i></div>
                <Link className ="logo" to='/'>
                    <object type="image/svg+xml" data="web/img/logo-white.svg">
                        {/*<img src="SvgImg.png" width="200" height="200" alt="image format png" />*/}
                    </object>
                </Link>
                <ul className ="menu">
                    {this.state.mainMenu.map((value, index) => {
                        return <MainMenuLi
                            key = {index}
                            label = {value} />;
                    })}
                </ul>
                <div className ="contact-us">
                    <ul className ="social">
                        <li><a href=""><i className ="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className ="fa fa-skype" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className ="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                    </ul>
                    <Link className ="bold" to="/contactus">Contact Us</Link>
                </div>
            </aside>
        );
    }
}

export default AsideContainer;
