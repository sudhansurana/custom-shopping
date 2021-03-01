import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="newsletter-contaner mt-2">
                <h5>New To Amazing Shop?</h5>
                <p className="text-muted">Subscribe to our newsletter to get updates on our lates offers!</p>
                <div className="input-contaner mt-2">
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="Email Address" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-contaner">
                <div>
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="active" aria-current="page" href="/">Company</a></li>
                        <li><a className="active" aria-current="page" href="/">Location</a></li>
                        <li><a className="active" aria-current="page" href="/">Contacts</a></li>
                        <li><a className="active" aria-current="page" href="/">Opening Hours</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Useful links</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="active" aria-current="page" href="/">Help</a></li>
                        <li><a className="active" aria-current="page" href="/">Privacy Ploicy</a></li>
                        <li><a className="active" aria-current="page" href="/">Terms and Conditions</a></li>
                        <li><a className="active" aria-current="page" href="/">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Customer Servie</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="active" aria-current="page" href="/">Payment Methods</a></li>
                        <li><a className="active" aria-current="page" href="/">Money-back</a></li>
                        <li><a className="active" aria-current="page" href="/">Returns</a></li>
                        <li><a className="active" aria-current="page" href="/">Shipping</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Join Us</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="active" aria-current="page" href="/">Twitter</a></li>
                        <li><a className="active" aria-current="page" href="/">Facebook</a></li>
                        <li><a className="active" aria-current="page" href="/">Instagram</a></li>
                        <li><a className="active" aria-current="page" href="/">Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className=" shop-footer text-center p-3">Copyright</div>
        </footer>
    )
}
