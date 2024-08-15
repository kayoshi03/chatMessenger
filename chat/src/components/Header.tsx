import {Avatar, Button, Flex, Typography} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import {User} from "@/data/user.data";
import React from "react";
interface HeaderProps {
    close: () => void;
}
const backColor:React.CSSProperties = {
    backgroundColor: "#0ddd0d"
}
const typographyTitle:React.CSSProperties = {
    margin:"0",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#2C2C2E"
}
const typographyParagraph:React.CSSProperties = {
    margin: "0",
    textAlign: "center",
    fontSize: "12px",
    color: "#666668"
}
export const Header:React.FC<HeaderProps> = ({close}) => {
    return(
        <Flex gap={"5px"} align="center" justify="space-between">
            <Avatar.Group>
                {
                    User.slice(0, 4).map((item) => (
                        <Avatar
                            size="small"
                            style={backColor}
                            key={item.id}
                            src={item.url}
                        />
                    ))
                }
            </Avatar.Group>
            <Flex vertical align="center">
                <Typography.Title
                    style={typographyTitle}
                    level={5}
                >
                    Name chat
                </Typography.Title>
                <Typography.Paragraph
                    style={typographyParagraph}
                    type="secondary"
                >
                    last seen 45 minutes ago
                </Typography.Paragraph>
            </Flex>
            <Button onClick={() => close()} type="text">
                <EllipsisOutlined />
            </Button>
        </Flex>
    )
}