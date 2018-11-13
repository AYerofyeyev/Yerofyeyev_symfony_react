import React, { Component } from "react";
import { Link } from 'react-router-dom';

import NewsBoxContainer from "./NewsBoxContainer";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="lowlark">
                    <div className="wrapper">
                        <div className="column">
                            <img src="web/img/Home-LL.png" alt="LL-comouter" />
                        </div>
                        <div className="column">
                            <h1>LOWLARK</h1>
                            <h5>Web Design Company.</h5>
                            <p><strong>We make projects quick, <br/>efficiently and beautiful.</strong></p>
                            <Link to='/latestworks'><button className="button-purple">PORTFOLIO</button></Link>
                            <Link to='/aboutus'><button className="button-white">ABOUT US</button></Link>
                        </div>
                    </div>
                </section>
                <section className="old-new">
                    <div className="wrapper">
                        <h3 className="bold font60">turning <span className="font90">old</span> <span className="gloria">design</span></h3>
                        <h1 className="font100">into</h1>
                        <h3 className="bold font60"><span className="font90">new</span> <span className="gloria">ones</span></h3>
                        <img src="img/Home-Old.png" alt="Old" />
                    </div>
                </section>
                <section className="desires">
                    <div className="wrapper">
                        <p className="font48 bold">listen <span className="font72">carefully</span> to you</p>
                        <div className="desires__shift_left">
                            <p className="font48 bold">&</p>
                            <p className="font48 bold"><span className="font72">understand</span> your <span className="gloria">desires</span></p>
                        </div>
                        <div className="desires__photo">
                            <img src="web/img/Home-Desires.png" alt="your-desires" />
                        </div>
                    </div>
                </section>
                <section className="style">
                    <div className="wrapper">
                        <p className="font60 bold">we <span className="font90">know</span></p>
                        <p className="font60 bold"><span className="font90">what</span> is <span className="gloria">style</span></p>
                        <img src="web/img/Home-Style.png" alt="style" />
                    </div>
                </section>
                <NewsBoxContainer/>
            </main>
        );
    }
}

export default HomeContainer;
