import {CURRENT_USER} from "@/constant/const";
import {Flex, Typography} from "antd";
import {User} from "@/data/user.data";
import React from "react";
interface IHeader{
     id: number
}
const gap = "10px"
const typographyTitle:React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#2C2C2E",
    margin: 0
}
const typographyParagraph:React.CSSProperties = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "auto",
    color: "#666668",
    margin: 0
}
export const MessageHeader:React.FC<IHeader> = ({id}) => {
    return (
        <React.Fragment>
            {
                id !== CURRENT_USER ?
                <Flex gap={gap}>
                    <Typography.Title
                        style={typographyTitle}
                    >
                        {User.find((l) => l.id === id)?.fullName}
                    </Typography.Title>
                    <Typography.Paragraph
                        style={typographyParagraph}
                    >
                        {User.find((l) => l.id === id)?.position}
                    </Typography.Paragraph>
                </Flex>
                :
                <></>
            }
        </React.Fragment>
    )}