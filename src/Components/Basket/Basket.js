import React, { useContext } from "react";

import "./Basket.css";
import { productContext } from "../../context/ProductContext";
import Wrapper from "../../HOC/Wrapper";
const Basket = () => {
        const { cart, totalPrice, add, removeCart, deCreament } = useContext(productContext);

        return (
                <Wrapper>
                        <div className="basket">
                                <div className="sobatel">
                                        <h3>Total Price: {totalPrice}$</h3>
                                        <h3>Count of Product: {cart.length}</h3>
                                        <button className="btn-cart">Check Out</button>
                                </div>
                                <div className="productList">
                                        <ul>
                                                <li>
                                                        <h3>Col NO</h3>
                                                        <h3>Product Name</h3>
                                                        <h3>Product Price</h3>
                                                        <h3>Count</h3>
                                                </li>
                                                {cart.length == 0 ? (
                                                        <li style={{ borderBottom: "none" }}>
                                                                <h3>There is no Product to See</h3>
                                                        </li>
                                                ) : null}
                                                {cart.map((product, index) => {
                                                        return (
                                                                <li key={index}>
                                                                        <h3>{index + 1}</h3>
                                                                        <h3>{product.item.title}</h3>
                                                                        <h3>{product.item.price}$</h3>
                                                                        <div className="contorol">
                                                                                <button className="remove" onClick={() => deCreament(product)}>
                                                                                        -
                                                                                </button>
                                                                                <h3>{product.count}</h3>
                                                                                <button className="add" onClick={() => add(product.item.id)}>
                                                                                        +
                                                                                </button>
                                                                                <button className="remove" onClick={() => removeCart(product)}>
                                                                                        Remove
                                                                                </button>
                                                                        </div>
                                                                </li>
                                                        );
                                                })}
                                        </ul>
                                </div>
                        </div>
                </Wrapper>
        );
};

export default Basket;
