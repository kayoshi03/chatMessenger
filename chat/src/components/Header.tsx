import {Avatar, Button, Flex, Typography} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import {User} from "@/data/user.data";

export const Header = ({close}:void) => {
    return(
        <Flex gap={"5px"} align="center" justify="space-between">
            <Avatar.Group>
                {
                    User.slice(0, 4).map((item) => (
                        <Avatar
                            size="small"
                            style={{
                                backgroundColor: "#0ddd0d"
                            }}
                            key={item.id}
                            src={item.url}
                        />
                    ))
                }
                {/*<Avatar size="small" style={{*/}
                {/*    backgroundColor: "#0ddd0d"*/}
                {/*}}>*/}
                {/*    E*/}
                {/*</Avatar>*/}
                {/*<Avatar size="small" style={{*/}
                {/*    backgroundColor: "#dd0d0d"*/}
                {/*}}>*/}
                {/*    V*/}
                {/*</Avatar>*/}
                {/*<Avatar size="small" style={{*/}
                {/*    backgroundColor: "#0b57ad"*/}
                {/*}}>*/}
                {/*    A*/}
                {/*</Avatar>*/}
            </Avatar.Group>
            <Flex vertical align="center">
                <Typography.Title
                    style={{
                        margin:"0",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "18px",
                        color: "#2C2C2E"
                    }}
                    level={5}
                >
                    Name chat
                </Typography.Title>
                <Typography.Paragraph
                    style={{
                        margin:"0",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#666668"
                    }}
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