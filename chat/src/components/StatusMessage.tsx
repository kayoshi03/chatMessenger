import React from "react";
import {CheckOutlined, ClockCircleOutlined} from "@ant-design/icons";


interface StatusMessageProps {
    status: "sent" | "read" | "expect";
}
const color:React.CSSProperties = {
    color: "white"
}
export const StatusMessage:React.FC<StatusMessageProps> = ({status}) => {
    return(
        <>
            {
                status === "read" ?
                    <CheckOutlined
                        style={color}
                    /> :
                        status === "sent" ?
                            <CheckOutlined /> :
                                status === "expect" ?
                                    <ClockCircleOutlined /> :
                                        <></>
            }
        </>
    )
}