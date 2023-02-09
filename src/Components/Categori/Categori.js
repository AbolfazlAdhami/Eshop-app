import React, { useContext, useState } from "react";
import "./Categori.css";
import { productContext } from "../../context/ProductContext";
import Wrapper from "../../HOC/Wrapper";

const Categori = () => {
        const { products } = useContext(productContext);
        const [product, setProduct] = useState(products);
        let tag = [];
        products.forEach((product) => {
                tag.push(product.category);
        });
        tag = [...new Set(tag)];
        console.log(tag);
        return (
                <Wrapper>
                        <div className="category"></div>
                </Wrapper>
        );
};

export default Categori;
