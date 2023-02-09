import React from "react";
import Wrapper from "../../HOC/Wrapper";
import Swipper from "../Swipper/Swipper";
import Products from "../Products/Products";

const Home = () => {
        return (
                <Wrapper>
                        <Swipper />
                        <Products />
                </Wrapper>
        );
};

export default Home;
