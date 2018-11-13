import React, { Component } from "react";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.login + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    <object type="image/svg+xml" data="img/logo_ll_darck.svg">
                        {/*<img src="SvgImg.png" width="200" height="200" alt="image format png" />*/}
                    </object>
                    <a name="contact"></a>
                    <form id='loginForm' onSubmit={this.handleSubmit}>
                        <h4 className="bold">LOG IN</h4>
                        <div className="name-email">
                            <input type="text" id="login" name="login" placeholder="Log in" value={this.state.login} onChange={this.handleInputChange}/>
                            <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                        </div>
                        <button class="button-footer" type='submit' form='loginForm'>SUBMIT</button>
                    </form>
                </div>
            </main>
        );
    }
}

export default LoginContainer;
