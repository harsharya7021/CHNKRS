import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-part1">
                        <div className="footer-sub1-money-lang-usd">
                            <span>United State</span>
                            <span>|</span>
                            <span>English (en)</span>
                            <span>|</span>
                            <span>$ USD</span>
                        </div>
                        <div className="footer-sub1-social">
                            <i className="fab fa-twitter fa-lg"></i>
                            <i className="fab fa-facebook-f fa-lg"></i>
                            <i className="fab fa-instagram-square fa-lg"></i>
                            <i className="fab fa-youtube fa-lg"></i>
                            <i className="fab fa-apple fa-lg"></i>
                            <i className="fab fa-android fa-lg"></i>
                        </div>
                        <div className="footer-sub1-aaproud">
                            <i className="fas fa-cog fa-lg"></i>
                            <span>Proudly Built in App Academy</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-part2">
                        <a href="">HELP</a>
                        <span>|</span>
                        <a href="">HOW IT WORKS</a>
                        <span>|</span>
                        <a href="">REVIEWS</a>
                        <span>|</span>
                        <a href="">PRIVACY</a>
                        <span>|</span>
                        <a href="">TERMS</a>
                        <span>|</span>
                        <a href="">JOBS</a>
                        <span>|</span>
                        <a href="">CONTACT</a>
                        <span>|</span>
                        <a href="">PRODUCT REQUEST</a>
                        <span>|</span>
                        <a href="">PRESS</a>
                    </div>
                    <div className="footer-part3">
                        <div className="footer-part3-lang">
                            <a href="">IT</a>
                            <a href="">DE</a>
                            <a href="">FR</a>
                            <a href="">ZH</a>
                        </div>
                        <div className="footer-part3-right">
                            <i className="fas fa-at fa-sm"></i>
                            <span>2020 CopX. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer;