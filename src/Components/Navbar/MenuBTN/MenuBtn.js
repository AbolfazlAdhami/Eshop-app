import React, { useContext } from "react";
import "./MenuBtn.css";
import { LayoutContext } from "../../../context/LayoutContext";

function MenuBtn() {
        const context = useContext(LayoutContext);

        return (
                <div className="menu-btn" onClick={() => context.btn_Click()}>
                        <span>
                                <i className="bx bx-menu-alt-right"></i>
                        </span>
                </div>
        );
}

export default MenuBtn;
