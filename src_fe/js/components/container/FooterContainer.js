import React, { Component } from "react";

class FooterContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer>
                <div className="wrapper">
                    <object type="image/svg+xml" data="web/img/logo_ll_dark.svg">
                        {/*<img src="SvgImg.png" width="200" height="200" alt="image format png" />*/}
                    </object>
                    <a name="contact"></a>
                    <form method="POST" action="/contactus">
                        <h4 className="bold">CONTACT US</h4>
                        <div className="name-email">
                            <input type="text" id="name" name="name" placeholder="Name" />
                            <input type="email" id="email" name="email" placeholder="E-mail" />
                        </div>
                        <input type="tel" id="phone" name="phone" placeholder="Phone" />
                        <textarea id="message" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <button type="submit" className="button-footer">SUBMIT</button>
                    </form>
                    <div>
                        <a>Privacy Policy</a>
                        <a href='/admin'>Log In</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterContainer;
