import facebookImg from "../assets/facebook.svg";
import twitterImg from "../assets/twitter.svg";
import youtubeImg from "../assets/youtube.svg";
import instagramImg from "../assets/instagram.svg";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <span className="footer__copyright">©codeit - 2023</span>
        <div className="footer__links">
          <a className="footer__link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer__link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="footer__sns-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookImg} alt="facebook 바로가기" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterImg} alt="twitter 바로가기" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeImg} alt="youtube 바로가기" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramImg} alt="instagram 바로가기" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
