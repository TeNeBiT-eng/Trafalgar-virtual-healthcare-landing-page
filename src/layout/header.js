import {SVG} from '../asset/svg/Svg';
import "../App.css";
import { Link } from 'react-router-dom';
// import Images from '../asset/image/Image';

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={SVG.Trafalgarlogo} alt="logo" />
                    </div>

                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Findadoctor'>Find a doctor</Link></li>
                        <li><Link to='/Apps'>Apps</Link></li>
                        <li><Link to='/Testimonials'>Testimonials</Link></li>
                        <li><Link to='/Aboutus'>About us</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;