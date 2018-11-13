import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Portal = () => (
    <main>
        <section className="s-options">
            <video loop muted autoPlay poster="img/videoframe.jpg" className="video_bkg">
                <source src="videos/socialmedia.mp4"type="video/mp4"/>
            </video>
            <div className="wrapper">
                <ul className="s-menu">
                    <li><Link to='/service/landing'>Landing page</Link></li>
                    <li><Link to='/service/corporative'>Corporate  web-site</Link></li>
                    <li><Link to='/service/mobile'>Mobile version</Link></li>
                </ul>
                <h3>Info portal</h3>
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
                        <li><h5 className="light"><i className="fa fa-cogs" aria-hidden="true"></i> Search Engine Optimization</h5></li>
                        <li><h5 className="light"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Creating logo</h5></li>
                        <li><h5 className="light"><i className="fa fa-home" aria-hidden="true"></i> Buy domain & hosting</h5></li>
                        <li><h5 className="light"><i className="fa fa-wrench" aria-hidden="true"></i> Support</h5></li>
                        <li><h5 className="light"><i className="fa fa-shopping-basket" aria-hidden="true"></i> Flexible price list</h5></li>
                    </ul>
                </div>
                <h3>What is Info portal ?</h3>
                <div className="s-text">
                    <p>A portal is a specially designed website that brings information together from diverse sources in a uniform way like emails, forums, and search engines etc. Usually, each information source gets its dedicated area on the page for displaying information; often, the user can configure which ones to display. Variants of portals include mashups and intranet "dashboards" for executives and managers. The extent to which content is displayed in a "uniform way" may depend on the intended user and the intended purpose, as well as the diversity of the content</p><br/>
                </div>
            </div>
        </section>
    </main>
);

export default Portal;
