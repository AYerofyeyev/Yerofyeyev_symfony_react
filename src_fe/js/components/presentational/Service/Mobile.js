import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Mobile = () => (
    <main>
        <section className="s-options">
            <video loop muted autoPlay poster="img/videoframe.jpg" className="video_bkg">
                <source src="videos/cellphone.mp4" type="video/mp4"/>
            </video>
            <div className="wrapper">
                <ul className="s-menu">
                    <li><Link to='/service/corporative'>Corporative web-site</Link></li>
                    <li><Link to='/service/portal'>Info portal</Link></li>
                    <li><Link to='/service/landing'>Landing page</Link></li>
                </ul>
                <h3>Mobile version</h3>
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
                        <li><h5 className="light"><i className="fa fa-cogs" aria-hidden="true"></i> Adaptive for all devices</h5></li>
                        <li><h5 className="light"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Creating logo</h5></li>
                        <li><h5 className="light"><i className="fa fa-home" aria-hidden="true"></i> Buy domain & hosting</h5></li>
                        <li><h5 className="light"><i className="fa fa-wrench" aria-hidden="true"></i> Support</h5></li>
                        <li><h5 className="light"><i className="fa fa-shopping-basket" aria-hidden="true"></i> Flexible price list</h5></li>
                    </ul>
                </div>
                <h3>What as a Mobile Website ?</h3>
                <div className="s-text">
                    <p>
                        A mobile website is one that has been optimized for viewing on a mobile device such as a smartphone or tablet.
                    </p>
                    <br/>
                    <p>
                        Mobile websites differ from regular sites in several ways. Sites that are mobile friendly offer a better user experience to smartphone owners, which leads to longer engagement times and greater customer satisfaction.
                    </p>
                    <br/>
                    <p>
                        To better appreciate the difference between desktop and mobile sites, let's look at a typical website built for the terrestrial era.
                    </p>
                </div>
            </div>
        </section>
    </main>
);

export default Mobile;
