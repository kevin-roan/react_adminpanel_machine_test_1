import { FaChevronDown } from "react-icons/fa";
import "../styles/components/header.scss";

function Header() {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img
          src=" https://png.pngtree.com/png-clipart/20210725/original/pngtree-abn-text-logo-design-png-image_6551974.jpg"
          alt="logo"
          style={{ height: "3rem" }}
        />
      </div>
      <div className="dropdown_wrapper">
        <div className="logo_header">
          <img
            src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="company logo"
          />
          <h2>XYZ Enterprices Pvt.Ltd</h2>
        </div>
        <div className="dropdown_container">
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
