import React from "react";
import "./contact.css";
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import illustration from './images/illustration.png';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sname: '',
            email: '',
            message: 'Type something if you want'
        }
    }
    
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        alert(this.state.sname + ' with email address, ' +this.state.email+ ' submitted the message: ' + this.state.message);
        e.preventDefault();
    }

    render() {
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <h2>Let's talk</h2>
                                <p className="request">To request a quote or want to meet up for coffee, contact us directly or fill out thr form and we will get back to you promptly.</p>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="sname">Your Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="sname" 
                                            value={this.state.sname} 
                                            onChange={this.handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            value={this.state.email} 
                                            onChange={this.handleInputChange} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea 
                                            className="form-control" 
                                            name="message" 
                                            rows="8" 
                                            value={this.state.message}
                                            onChange={this.handleInputChange}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    
                        <div className="col-lg-6">
                            <div className="location">
                                <img src={illustration} className="img-fluid" alt="illustration" />
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div>
                                        <p className="address">151 New Park Ave, Hartford, CT 06106 United States</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div>
                                        <p>+1(203) 302-9545</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div>
                                        <a href="mailto:contact@inverutasoft.com">contact@inverutasoft.com</a>
                                    </div>
                                </div>
                                <div className="d-flex social-icons">
                                    <div className="mr-2">
                                        <a href=""><img src={facebook} className="img-fluid" alt="facebook" /></a>
                                    </div>
                                    <div className="mr-2">
                                        <a href=""><img src={twitter} className="img-fluid" alt="twitter" /></a>
                                    </div>
                                    <div className="mr-2">
                                        <a href=""><img src={instagram} className="img-fluid" alt="instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;