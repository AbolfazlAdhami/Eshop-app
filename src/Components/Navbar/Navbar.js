import React from "react";

import "./Navbar.css";
import Logo from "./Logo/Logo";
import User from "./User/User";
import Menu from "./Menu/Menu";
import MenuBtn from "./MenuBTN/MenuBtn";

const Navbar = () => {
        return (
                <div className="navbar">
                        <User />
                        <Logo />
                        <Menu />
                        <span className="btn">
                                <MenuBtn />
                        </span>
                </div>
        );
};

export default Navbar;
