import React, { useContext, useState } from "react";
import Wrapper from "../../HOC/Wrapper";

import "./Products.css";
import Box from "../UI/SkelotonBox/Skeloton";
import { productContext } from "../../context/ProductContext";
import Card from "../UI/Card/Card";

const Products = () => {
        const SkeletonBox = () => {
                return Array(3)
                        .fill("")
                        .map((item, index) => <Box key={index} />);
        };
        const { products, loader } = useContext(productContext);

        return (
                <Wrapper>
                        <div className="products">
                                <h3 className="text">Best price with best quality</h3>
                                {loader ? (
                                        <div className="box-card">
                                                <SkeletonBox />{" "}
                                        </div>
                                ) : null}
                                <div className="product-box">
                                        {products.map((product) => (
                                                <Card product={product} key={product.id} />
                                        ))}
                                </div>
                        </div>
                </Wrapper>
        );
};

export default Products;
