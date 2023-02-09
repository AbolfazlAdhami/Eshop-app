import React, { useContext } from "react";
import Wrapper from "../../../HOC/Wrapper";

import "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";
import ResNavi from "../ResNavi/ResNavi";
import { LayoutContext } from "../../../context/LayoutContext";
import { motion } from "framer-motion";

export default function Modal() {
        const { modal } = useContext(LayoutContext);

        return (
                <Wrapper>
                        <div className="modal">
                                <BackDrop>
                                        {modal ? (
                                                <motion.div
                                                        className="box"
                                                        initial={{ opacity: 0, translateX: -10 }}
                                                        animate={{ opacity: 1, translateX: 0 }}
                                                        transition={{
                                                                duration: 1,
                                                                delay: 0,
                                                                ease: [0, 0.71, 0.2, 1.01],
                                                        }}
                                                >
                                                        <ResNavi />
                                                </motion.div>
                                        ) : null}
                                </BackDrop>
                        </div>
                </Wrapper>
        );
}
