import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Landing = () => (
    <main>
        <section className="s-options">
            <video loop muted autoPlay poster="img/videoframe.jpg" className="video_bkg">
                <source src="videos/computer.mp4" type="video/mp4"/>
            </video>
            <div className="wrapper">
                <ul className="s-menu">
                    <li><Link to='/service/corporative'>Corporative web-site</Link></li>
                    <li><Link to='/service/portal'>Info portal</Link></li>
                    <li><Link to='/service/mobile'>Mobile version</Link></li>
                </ul>
                <h3>Landing page</h3>
                <div className="s-info">
                    <ul className="s-info__major">
                        <li><h5 className="light"><i className="fa fa-tag" aria-hidden="true"></i> Averenge cost: x $</h5></li>
                        <li><h5 className="light"><i className="fa fa-clock-o" aria-hidden="true"></i> Averenge time: x weeks</h5></li>
                    </ul>
                </div>
                <h3>We can offer:</h3>
                <div className="s-info">
                    <ul className="s-info__minor">
                        <li><h5 className="light"><i className="fa fa-pencil" aria-hidden="true"></i> Design</h5></li>
                        <li><h5 className="light"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Creating logo</h5></li>
                        <li><h5 className="light"><i className="fa fa-home" aria-hidden="true"></i> Buy domain & hosting</h5></li>
                        <li><h5 className="light"><i className="fa fa-wrench" aria-hidden="true"></i> Support</h5></li>
                        <li><h5 className="light"><i className="fa fa-shopping-basket" aria-hidden="true"></i> Flexible price list</h5></li>
                    </ul>
                </div>
                <h3>What is landing page ?</h3>
                <div className="s-text">
                    <p>In the purest sense, a landing page is any web page that a visitor can arrive at or “land” on. However, when discussing landing pages within the realm of marketing and advertising, it’s more common to refer to a landing page as being a standalone web page distinct from your main website that has been designed for a single focused objective.<br/>
                        This means that your landing page should have no global navigation to tie it to your primary website. The main reason for this is to limit the options available to your visitors, helping to guide them toward your intended conversion goal.</p>
                </div>
            </div>
            <img className="landing-pic" src="img/Landing.png" alt="landing"/>
        </section>
    </main>
);

export default Landing;
