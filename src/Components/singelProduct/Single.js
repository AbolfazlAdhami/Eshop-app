import React, { useContext } from "react";
import { useParams } from "react-router";
import Wrapper from "../../HOC/Wrapper";
import { productContext } from "../../context/ProductContext";
import { Carousel } from "antd";
import "./Single.css";

const Single = () => {
        const { id } = useParams();
        const { products, add } = useContext(productContext);
        const product = [...products].filter((item) => item.id == id)[0];
        const rate = Math.round(product.rating);

        console.log(product);
        return (
                <Wrapper>
                        <div className="sinle-page">
                                <div className="slider">
                                        <Carousel autoplay>
                                                {product.images.map((image, index) => (
                                                        <img src={image} alt="" key={index} />
                                                ))}
                                        </Carousel>
                                </div>
                                <div className="desc">
                                        <div className="title">
                                                <h2>{product.title}</h2>
                                        </div>
                                        <div className="info">
                                                <p>Description:{product.description}</p>
                                                <p>Brand:{product.brand}</p>
                                                <p>Category:{product.category}</p>
                                                <p>Price:{product.price}$</p>
                                                <p>
                                                        {" "}
                                                        {Array(rate)
                                                                .fill(" ")
                                                                .map((item, index) => (
                                                                        <i key={index} className="bx bxs-star"></i>
                                                                ))}
                                                        <i className="bx bxs-star-half"></i>
                                                </p>
                                        </div>
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
export default Single;
