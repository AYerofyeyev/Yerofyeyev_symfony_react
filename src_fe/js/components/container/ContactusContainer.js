import React, { Component } from "react";

class ContactusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchResult: '',
            name: '',
            email: '',
            phone: '',
            message: '',
            options: '',
            optionsList: [
                {
                    id: 'contactChoice1',
                    value: 'landing',
                    text: 'Landing page'
                },
                {
                    id: 'contactChoice2',
                    value: 'portal',
                    text: 'Info portal'
                },
                {
                    id: 'contactChoice3',
                    value: 'corporative',
                    text: 'Corporative web-site'
                },
                {
                    id: 'contactChoice4',
                    value: 'mobile',
                    text: 'Mobile version'
                }
            ]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // fetch('/contactus', {
        //     method: 'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: {
        //         "name": this.state.name,
        //         "email": this.state.email,
        //         "phone": this.state.phone,
        //         "message": this.state.message
        //     }
        // })
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 fetchResult: result.result
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 fetchResult: error.message
        //             });
        //         }
        //     );
        let that = this;
        let Data = new FormData();
        Data.append('name', this.state.name);
        Data.append('email', this.state.email);
        Data.append('phone', this.state.phone);
        Data.append('message', this.state.message);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/contactus');
        // xhr.setRequestHeader("Content-Type", "multipart/form-data" --- missing boundary!);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                that.state.fetchResult = xhr.response;
            }
            that.state.fetchResult = xhr.response;
        };
        xhr.send(Data);

        alert(this.state.name + ', '
            + this.state.email  + ', '
            + this.state.phone + ', '
            + this.state.message + ', '
            + this.state.options
        );
    }

    render() {
        const { fetchResult } = this.state;
        return(
            <main>
                <section className="contact_us">
                    <div className="wrapper">
                        <h1>CONTACT US</h1>
                        <p>{fetchResult}</p>
                        <form id='contactusForm' onSubmit={this.handleSubmit}>
                            <div className="block">
                                <div className="fields">
                                    <div className="name-email">
                                        <input type="text" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
                                        <input type="email" id="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleInputChange}/>
                                    </div>
                                    <input type="tel" id="phone" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleInputChange}/>
                                    <textarea id="message" name="message" cols="30" rows="10" placeholder="Message" value={this.state.message} onChange={this.handleInputChange}></textarea>
                                </div>
                                <div className="radio">
                                    <p className="bold">I need help with:</p>
                                    {
                                        this.state.optionsList.map(option => (
                                            <div key={option.id} className="radio_element">
                                                <input type="radio" id={option.id}
                                                       name="options" value={option.value} onChange={this.handleInputChange}/>
                                                <label htmlFor={option.id}>{option.text}</label>
                                            </div>
                                    ))}
                                </div>
                            </div>
                            <button className="button-purple" type='submit' form='contactusForm'>Submit</button>
                        </form>
                        <h3>Still have any questions ?</h3>
                        <h3>Write me!</h3>
                        <div className="support">
                            <div className="pic">photo</div>
                            <div className="contacts">
                                <h5>Hi, I'm Xxxx!</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi magni placeat provident debitis ipsam dolorum neque earum fugit at ipsa tempore blanditiis, voluptatum ducimus aspernatur optio incidunt, aperiam recusandae voluptate.</p>
                                <p className="bold">You can find me:</p>
                                <div className="links">
                                    <div className="column">
                                        <a><i className="fa fa-twitter-square" aria-hidden="true"></i> @twitter_name</a>
                                        <a><i className="fa fa-skype" aria-hidden="true"></i> ll_skype_acount</a>
                                        <a><i className="fa fa-facebook-official" aria-hidden="true"></i> facebook_account</a>
                                    </div>
                                    <div className="column">
                                        <a><i className="fa fa-envelope-o" aria-hidden="true"></i> email@mail.com</a>
                                        <a><i className="fa fa-phone" aria-hidden="true"></i> +111111111</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default ContactusContainer;
