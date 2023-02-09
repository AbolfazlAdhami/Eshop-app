import React from "react";
import { Skeleton, Space } from "antd";

const Box = () => {
        return (
                <div
                        className="skeloton-box"
                        style={{
                                border: "solid 0.09rem #999",
                                margin: "1rem  0.5rem",
                                borderRadius: "0.3rem",
                                width: "100%",
                                display: "flex",
                                padding: "1rem",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                        }}
                >
                        {" "}
                        <Skeleton.Image style={{ width: "25rem", height: "15rem", padding: "1rem 0" }} active={true} />
                        <Skeleton style={{ width: "100%", height: "10rem", margin: "0.5rem" }} active={true}>
                                {/* <p></p> */}
                        </Skeleton>
                </div>
        );
};

export default Box;
