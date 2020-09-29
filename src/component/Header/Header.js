import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as Logo } from "../../assets/youtube.svg";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Logo className="header__logo" />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://avatars1.githubusercontent.com/u/59453152?s=400&u=14b409885a45c5f4d830eb180590fdf1d446d8b7&v=4"
          alt="Bello Emmanuel Oluwatimilehin"
        />
      </div>
    </div>
  );
}

export default Header;
