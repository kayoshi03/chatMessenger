import React from "react";
import {CheckOutlined, ClockCircleOutlined} from "@ant-design/icons";
import {IMessageType} from "@/type/message.type";

export const StatusMessage:React.FC = ({status}:IMessageType) => {
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