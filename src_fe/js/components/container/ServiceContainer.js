import React, { Component } from "react";
import { Link } from "react-router-dom";

class ServiceContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <main>
                <section className="service">
                    <div className="wrapper">
                        <h1>LOWLARK KNOWS WHAT YOU NEED</h1>
                        <div className="box1">
                            <div className="box2">
                                <div className="box3">
                                    <Link to='/service/mobile'>
                                        <div className="custom">
                                            <div className="pic">
                                                <img src="img/mobile-recharge.jpg" alt="service"/>
                                            </div>
                                            <div className="service__title">
                                                <i className="fa fa-caret-left left" aria-hidden="true"></i>
                                                <h3 className="light">Mobile version</h3>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to='/service/landing'>
                                        <div className="landing">
                                            <div className="service__title">
                                                <i className="fa fa-caret-right right" aria-hidden="true"></i>
                                                <h3 className="light">Landing page</h3>
                                            </div>
                                            <div className="pic"><img src="img/sales-landing-page.jpg" alt="service"/></div>
                                        </div>
                                    </Link>
                                </div>
                                <Link to='/service/portal'>
                                    <div className="info">
                                        <div className="pic">
                                            <img src="img/info.jpg" alt="service"/>
                                        </div>
                                        <div className="service__title">
                                            <i className="fa fa-caret-up top" aria-hidden="true"></i>
                                            <h3 className="light">Info portal</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Link to='/service/corporative'>
                                <div className="corporative">
                                    <div className="pic">
                                        <img src="img/corp.jpg" alt="service"/>
                                    </div>
                                    <div className="service__title">
                                        <i className="fa fa-caret-left left" aria-hidden="true"></i>
                                        <h3 className="light">Corporative Web site</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default ServiceContainer;
