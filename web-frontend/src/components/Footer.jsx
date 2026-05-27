import "./Footer.css";

function Footer() {
    return ( 
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Tiktok</p>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>hello@forma.com</p>
                </div>
                <div className="footer-column">
                    <h3>Opening Hours</h3>
                    <p>Mon - Fri: 8:00 - 21:00</p>
                    <p>Sat - Sun: 9:00 - 15:00</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>FORMA</p>
                <p>© 2026 All rights reserved</p>
                <p>Powered by Sardine S.</p>
            </div>
        </footer>
     );
}

export default Footer;