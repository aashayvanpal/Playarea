import React from 'react';
import { Link } from 'react-router-dom'
import facebook from './images/facebook-logo.png'
import gmail from './images/gmail-icon.png'
import whatsApp from './images/whatsApp-icon.png'

class Footer extends React.Component {
    render() {
        return (
            <div>
                Footer page
                <footer className="footer">
                    <div style={{
                        "display": "flex"
                    }}>
                        <div className="footer-c1" >
                            <div className="footer-c1-box1">
                                <h2><Link to="/" >Order Now!</Link></h2>
                                <h2><Link to="/" >Deals</Link></h2>
                            </div>

                            <div className="footer-c1-box2">
                                <h2><Link to="/aboutus"   >About Us</Link></h2>
                                <h2><Link to="/contactus" >Contact Us</Link></h2>
                            </div>

                        </div>
                        <div className="footer-c2">

                            <h2 style={{ "fontWeight": "bold" }}>Follow us on :-</h2>
                            <div style={{ "display": "flex", "justify-content": "center" }}>
                                <div>
                                    <img src={facebook} height="55px" />
                                    <img src={gmail} height="55px" />
                                    <img src={whatsApp} height="55px" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div style={{ "marginTop": "50px", "textAlign": "center" }}>
                        © copyrights reserved 2021
                    </div>
                </footer>
            </div >
        );
    }
}

export default Footer;