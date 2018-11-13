import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Corporative = () => (
    <main>
        <section className="s-options">
            <video loop muted autoPlay poster="img/videoframe.jpg" className="video_bkg">
                <source src="videos/workspace.mp4" type="video/mp4"/>
            </video>
            <div className="wrapper">
                <ul className="s-menu">
                    <li><Link to='/service/landing'>Landing page</Link></li>
                    <li><Link to='/service/portal'>Info portal</Link></li>
                    <li><Link to='/service/mobile'>Mobile version</Link></li>
                </ul>
                <h3>Corporate  web-site</h3>
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
                <h3>Why your business needs a website ?</h3>
                <div className="s-text">
                    <p className="bold">1. Competition</p><br/>
                    <p>This is one of the strongest  reasons to have a website.</p><br/>
                    <p>You know your competitors have a website. Not only your local retailers but also manufacturers and online sellers use websites as a way to communicate with existing and potential customers. <a className="read-more">Read more...</a></p><br/>
                </div>
            </div>
        </section>
    </main>
);

export default Corporative;
