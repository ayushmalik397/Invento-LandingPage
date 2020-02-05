import React from 'react';
import flogo from './assets/images/flogo.svg';
import './assets/css/footer.css';
import facebook from './assets/images/facebook.png';
import twitter from './assets/images/twitter.png';
import insta from './assets/images/insta.png';

function Footer(){
    return(
        <>
        <div className="footer">
            <img className="flogo" src={flogo} alt="Logo"/>
            <div className="companyList">
                <div className="companyHead">Company</div>
                <ul>
                    <li>About</li>
                    <li>FAQ</li>
                    <li>Signup</li>
                </ul>
            </div>
            <div className="legalList">
                <div className="legalHead">Legal</div>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="contactList">
                <div className="contactHead">Contact</div>
                <ul>
                    <li>Contact: contact@anteelo.com</li>
                    <li>Email: support@anteelo.com</li>
                    <li>Join Our Facebook Group: Anteelodesign</li>
                </ul>
            </div>
            <div className="followList">
                <div className="followHead">Follow Us</div>
                <ul>
                    <li className="followLi"><img className="followImg" src={facebook} alt="fb"/></li>
                    <li className="followLi"><img className="followImg" src={twitter} alt="twit"/></li>
                    <li className="followLi"><img className="followImg" src={insta} alt="insta"/></li>
                </ul>
            </div>
        </div> 
        <div className="subFooter">© 2018 Invento Lots</div>  
        </> 
    )
}

export default Footer