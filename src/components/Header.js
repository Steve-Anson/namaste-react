import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnname, setBtnName] = useState("Login");

  const clickHandler = () => {
    if (btnname === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="btn btn-login" onClick={clickHandler}>
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
