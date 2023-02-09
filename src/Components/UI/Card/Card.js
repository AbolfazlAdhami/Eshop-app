import React, { useContext } from "react";
import Wrapper from "../../../HOC/Wrapper";

import "./Card.css";
import { productContext } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
        const rate = Math.trunc(product.rating);
        const { add } = useContext(productContext);

        return (
                <Wrapper>
                        <div className="card">
                                <div className="image-card">
                                        <img src={product.thumbnail} alt="" />
                                </div>
                                <div className="desc-card">
                                        <Link to={`single/${product.id}`}>
                                                <div className="info">
                                                        <p>{product.title}</p>
                                                        <p>{product.price}$</p>
                                                </div>
                                                <div className="rate">
                                                        {Array(rate)
                                                                .fill(" ")
                                                                .map((item, index) => (
                                                                        <i key={index} className="bx bxs-star"></i>
                                                                ))}
                                                        <i className="bx bxs-star-half"></i>
                                                </div>
                                        </Link>
                                        <button className="card-btn" onClick={() => add(product.id)}>
                                                Add to Cart{" "}
                                                <span>
                                                        <i className="bx bxs-cart-alt"></i>
                                                </span>
                                        </button>
                                </div>
                        </div>
                </Wrapper>
        );
};

export default Card;
