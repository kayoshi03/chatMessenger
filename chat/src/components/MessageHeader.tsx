import {CURRENT_USER} from "@/constant/const";
import {Flex, Typography} from "antd";
import {User} from "@/data/user.data";
import React from "react";
interface IHeader{
     id: number
}
export const MessageHeader:React.FC<IHeader> = ({id}) => {
    return (
        <React.Fragment>
            {
                id !== CURRENT_USER ?
                <Flex gap={"10px"}>
                    <Typography.Title
                        style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            lineHeight: "18px",
                            color: "#2C2C2E",
                            margin: 0
                        }}
                    >
                        {User.find((l) => l.id === id)?.fullName}
                    </Typography.Title>
                    <Typography.Paragraph
                        style={{
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "auto",
                            color: "#666668",
                            margin: 0
                        }}
                    >
                        {User.find((l) => l.id === id)?.position}
                    </Typography.Paragraph>
                </Flex>
                :
                <></>
            }
        </React.Fragment>
    )}