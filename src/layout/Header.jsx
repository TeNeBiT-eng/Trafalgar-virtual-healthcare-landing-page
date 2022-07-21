import { SVG } from "../asset/svg/Svg";
import "../App.css";
import { Link } from "react-router-dom";
// import Images from '../asset/image/Image';

function Header() {
  return (
    <>
      <main>
        <header>
          <nav>
            <div className="logo">
              <img src={SVG.Trafalgarlogo} alt="logo" />
            </div>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Findadoctor">Find a doctor</Link>
              </li>
              <li>
                <Link to="/Apps">Apps</Link>
              </li>
              <li>
                <Link to="/Testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/Aboutus">About us</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="section1">
          <div>
            <p className="introHeading_Text">Virtual healthcare for you</p>
            <p className="introHeading_paragraph">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone.
            </p>
            <div className="consultBtn">
              <button>Consult today</button>
            </div>
          </div>
          <div className="firstIllustration">
            <img src={SVG.Trafalgarheaderillustration} alt="Illustration" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Header;
