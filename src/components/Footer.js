import '../css/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
        <br />
        <span>© {new Date().getFullYear()} Christopher Andrade</span>
        <br />
        <span> <a className="footer-link" href="https://github.com/AndradeCJahb/andradecjahb.github.io" target="_blank" rel="noopener noreferrer">Source</a></span>
    </div>
  </footer>
);

export default Footer;
