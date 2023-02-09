import React, { Component } from "react";

import Layout from "./Components/Layout/Layout";
import { LayoutContext } from "./context/LayoutContext";
import Modal from "./Components/UI/Modal/Modal";
import Home from "./Components/Home/Home";
import ProductData from "./context/ProductContext";
import { Route, Routes } from "react-router";
import Single from "./Components/singelProduct/Single";
import Basket from "./Components/Basket/Basket";
import Categori from "./Components/Categori/Categori";
import Auth from "./Components/Auth/Auth";

class Eshop extends Component {
        state = {
                layuot: {
                        btn: false,
                        backDrop: false,
                        modal: false,
                },
        };
        handlerShow = () => {
                const pervState = { ...this.state.layuot };
                pervState.btn = pervState.btn ? false : true;
                pervState.backDrop = pervState.backDrop ? false : true;
                pervState.modal = pervState.modal ? false : true;

                this.setState({ layuot: pervState });
        };
        render() {
                const contextValue = { btn_Click: () => this.handlerShow(), ...this.state.layuot };

                return (
                        <ProductData>
                                <LayoutContext.Provider value={contextValue}>
                                        <Layout>
                                                {contextValue.modal ? <Modal /> : null}
                                                <Routes>
                                                        <Route path="/home" exact element={<Home />} />
                                                        <Route path="/single/:id" exact element={<Single />} />
                                                        <Route path="/basket" exact element={<Basket />} />
                                                        <Route path="/categori" exact element={<Categori />} />
                                                        <Route path="/Auth" exact element={<Auth />} />
                                                        <Route path="/" exact element={<Home />} />
                                                </Routes>
                                        </Layout>
                                </LayoutContext.Provider>
                        </ProductData>
                );
        }
}

export default Eshop;
