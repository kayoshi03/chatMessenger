import React from "react";
import {CheckOutlined, ClockCircleOutlined} from "@ant-design/icons";
import {IMessageType} from "@/type/message.type";

interface StatusMessageProps {
    status: "sent" | "read" | "expect";
}
export const StatusMessage:React.FC<StatusMessageProps> = ({status}) => {
    return(
        <>
            {
                status === "read" ?
                    <CheckOutlined
                        style={{
                            color: "white"
                        }}
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