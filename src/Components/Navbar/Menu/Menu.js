import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
        return (
                <ul className="menu">
                        <Link to="/">
                                <li>
                                        <span>
                                                <i className="bx bxs-home-smile"></i>
                                        </span>
                                        <h3>Home</h3>
                                </li>
                        </Link>
                        <Link to={`/categori`}>
                                <li>
                                        <span>
                                                <i className="bx bx-category-alt"></i>
                                        </span>
                                        <h3>Categori</h3>
                                </li>
                        </Link>
                        <li>
                                <span>
                                        <i className="bx bxs-search"></i>
                                </span>
                                <h3>Search</h3>
                        </li>

                        <li>
                                <span>
                                        <i className="bx bxs-info-circle"></i>
                                </span>
                                <h3>About ME</h3>
                        </li>
                </ul>
        );
};

export default Menu;
