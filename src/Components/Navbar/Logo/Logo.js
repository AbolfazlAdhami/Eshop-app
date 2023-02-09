import React from "react";
import Wrapper from "../../../HOC/Wrapper";
import "./Logo.css";
const Logo = () => {
        return (
                <Wrapper>
                        <div className="logo">
                                <span>
                                        <i className="bx bxs-shopping-bag-alt"></i>
                                </span>
                                <h3>EShop</h3>
                        </div>
                </Wrapper>
        );
};

export default Logo;
