import React from "react";
import Wrapper from "../../HOC/Wrapper";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout(props) {
        return (
                <Wrapper>
                        <div className="layout">
                                <Navbar />
                                {props.children}
                                <ToastContainer
                                        position="bottom-left"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                />
                        </div>
                </Wrapper>
        );
}

export default Layout;
