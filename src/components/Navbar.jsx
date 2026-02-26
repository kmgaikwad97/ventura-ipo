import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <span> &gt; </span>
      <span>Market Watch</span>
    </div>
  );
};

export default Navbar;