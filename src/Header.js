import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Image from "./Images/FireImage.jpg";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src={Image} alt="" className="header__image" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
