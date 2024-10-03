import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-10">
      <aside>
        <img className="w-16" src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br /> trainer who is also a serial .
        </p>
      </aside>
      <nav>
        <h6 className="font-bold">About</h6>
        <Link to="/">Home</Link>
        <Link >Service</Link>
        <Link>Contact</Link>
      </nav>
      <nav>
        <h6 className="font-bold">Company</h6>
        <Link>Why Car Doctor About</Link>
        <Link>About</Link>
      </nav>
      <nav>
        <h6 className="font-bold">About</h6>
        <Link>Support Center</Link>
        <Link>Feedback</Link>
        <Link>Accesbility</Link>
      </nav>
    </footer>
  );
};

export default Footer;
