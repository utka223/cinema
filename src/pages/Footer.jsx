import { Reeact } from "react";
import "../css/footer.css";

function Footer() {
    return(
        <>
            <footer>
                <div className="info-footer">
                    <div>
                        <span><b>Contact Us</b></span>
                        <p>123 Main Street, Prague, Czech Republic</p>
                        <p>Phone: +420 123 456 789</p>
                        <p>Email: info@cinema.com</p>
                    </div>
                    <div>
                        <span><b>Opening Hours</b></span>
                        <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 12:00 PM - 12:00 AM</p>
                    </div>
                    <div className="links">
                        <span><b>Follow Us</b></span>
                        <p><a href="https://www.facebook.com/cinema" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/cinema" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/cinema" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;