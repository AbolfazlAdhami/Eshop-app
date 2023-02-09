import React, { useContext } from "react";
import Wrapper from "../../../HOC/Wrapper";
import { Badge } from "antd";
import "./User.css";
import { productContext } from "../../../context/ProductContext";
import { Link, NavLink } from "react-router-dom";
function User() {
        const { cart } = useContext(productContext);

        return (
                <Wrapper>
                        <div className="user">
                                <NavLink to="/Auth">
                                        <span>
                                                <i className="bx bxs-user"></i>
                                        </span>
                                </NavLink>
                                <Badge count={cart.length} size="small">
                                        <NavLink to="/basket">
                                                <span>
                                                        <i className="bx bxs-cart"></i>
                                                </span>
                                        </NavLink>
                                </Badge>
                        </div>
                </Wrapper>
        );
}

export default User;
